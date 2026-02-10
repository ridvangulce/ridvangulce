import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudyCard = ({ study, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative w-full h-[450px] md:h-[500px] perspective-1000"
        >
            <Link href={`/case-studies/${study.slug}`} className="block w-full h-full">
                <div className="relative w-full h-full bg-bg-secondary border border-border-subtle rounded-xl overflow-hidden transition-all duration-500 ease-out group-hover:scale-[1.01] group-hover:shadow-2xl group-hover:shadow-primary/10">

                    {/* Image / Gradient Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-tertiary to-bg-primary opacity-50 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                            <span className="text-primary text-xs font-mono uppercase tracking-widest mb-2 block">
                                {study.role}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-text-primary mb-3 group-hover:text-white transition-colors">
                                {study.title}
                            </h3>
                            <p className="text-text-secondary text-sm md:text-base max-w-lg mb-6 line-clamp-3">
                                {study.brief}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {study.tech.slice(0, 3).map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded bg-bg-tertiary border border-border-subtle text-text-secondary">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center text-primary font-medium text-sm group-hover:underline decoration-primary underline-offset-4">
                                Read Case Study
                                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
                </div>
            </Link>
        </motion.div>
    );
};

export default CaseStudyCard;
