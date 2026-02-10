import { motion } from 'framer-motion';
import clsx from 'clsx';

const Section = ({
    children,
    id,
    className,
    delay = 0
}) => {
    return (
        <section
            id={id}
            className={clsx("relative py-20 md:py-32", className)}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: "easeOut", delay }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
