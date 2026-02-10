import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial, Stars, Sparkles, Html, RoundedBox } from '@react-three/drei';
import { SiNodedotjs, SiPostgresql, SiLaravel, SiPhp, SiMysql, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import * as THREE from 'three';

const TechIcon = ({ icon: Icon, position, color = "#a1a1a1" }) => {
    const mesh = useRef();

    useFrame((state) => {
        if (mesh.current) {
            // Rotate the block itself to show 3D depth
            mesh.current.rotation.y += 0.01;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={mesh}>
                    {/* 3D Glass Block */}
                    <RoundedBox args={[0.6, 0.6, 0.1]} radius={0.1} smoothness={4}>
                        <meshPhysicalMaterial
                            color={"#ffffff"}
                            roughness={0.1}
                            metalness={0.1}
                            transmission={0.9} // Glass
                            thickness={0.5}
                            clearcoat={1}
                        />
                    </RoundedBox>

                    {/* The Icon inside the glass */}
                    <Html
                        transform
                        distanceFactor={1.5}
                        position={[0, 0, 0.06]} // Just on surface
                        style={{ pointerEvents: 'none', transform: 'scale(0.5)' }}
                    >
                        <div className="flex items-center justify-center">
                            {/* Icon color needs to be bright to show through/on glass */}
                            <Icon className="text-6xl drop-shadow-lg" style={{ color: color, filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />
                        </div>
                    </Html>
                </mesh>
            </Float>
        </group>
    );
};

const OrbitingIcons = ({ radius = 3.5 }) => {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y -= 0.002;
        }
    });

    const icons = [
        { Icon: SiNodedotjs, color: "#68a063", angle: 0 },
        { Icon: SiPostgresql, color: "#336791", angle: 45 },
        { Icon: SiLaravel, color: "#ff2d20", angle: 90 },
        { Icon: SiPhp, color: "#777bb4", angle: 135 },
        { Icon: SiMysql, color: "#4479a1", angle: 180 },
        { Icon: SiMongodb, color: "#47a248", angle: 225 },
        { Icon: SiExpress, color: "#000000", angle: 270 },
        { Icon: SiNextdotjs, color: "#000000", angle: 315 },
    ];

    return (
        <group ref={group} rotation={[0.2, 0, 0]}>
            {icons.map((item, i) => {
                const radian = (item.angle * Math.PI) / 180;
                const x = Math.sin(radian) * radius;
                const z = Math.cos(radian) * radius;
                return <TechIcon key={i} icon={item.Icon} position={[x, 0, z]} color={item.color} />;
            })}
        </group>
    );
};

const Monolith = (props) => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!mesh.current) return;

        // Constant slow rotation
        mesh.current.rotation.y += 0.002;

        // Very subtle mouse interaction to avoid "weird" jump
        const { x, y } = state.mouse;
        const targetX = y * 0.05; // Reduced sensitivity
        const targetZ = x * 0.05; // Reduced sensitivity

        mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.02;
        mesh.current.rotation.z += (targetZ - mesh.current.rotation.z) * 0.02;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            {/* Main Tech Orb */}
            <mesh
                {...props}
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={2}
            >
                <icosahedronGeometry args={[1, 2]} />
                <MeshDistortMaterial
                    color={hovered ? "#3b82f6" : "#2563eb"}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.2}
                    roughness={0.1}
                    distort={0.5}
                    speed={1.5}
                />
            </mesh>
        </Float>
    );
};

export default function HeroObject() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 9], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563eb" />

                <group position={[2, 0, 0]}>
                    <Monolith />
                    <OrbitingIcons radius={4.2} />
                </group>

                {/* Background Atmosphere */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={40} scale={12} size={3} speed={0.4} opacity={0.4} color="#2563eb" />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
