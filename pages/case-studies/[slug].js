import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { caseStudies } from '../../data/caseStudies';
import { FaArrowLeft } from 'react-icons/fa';

export default function CaseStudy({ study }) {
    if (!study) return null;

    return (
        <Layout title={`${study.title} | Case Study`}>
            <Head>
                <meta name="description" content={study.brief} />
            </Head>

            <article className="min-h-screen">
                {/* Header */}
                <div className="bg-bg-secondary pt-32 pb-20 border-b border-border-subtle">
                    <div className="container-custom">
                        <Link href="/#case-studies" className="inline-flex items-center text-primary text-sm font-medium mb-8 hover:underline">
                            <FaArrowLeft className="mr-2" /> Back to Case Studies
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
                        >
                            {study.title}
                        </motion.h1>

                        <div className="flex flex-wrap gap-8 text-sm md:text-base text-text-secondary font-mono">
                            <div>
                                <span className="block text-text-primary font-bold mb-1">ROLE</span>
                                {study.role}
                            </div>
                            <div>
                                <span className="block text-text-primary font-bold mb-1">TIMELINE</span>
                                {study.timeline}
                            </div>
                            <div>
                                <span className="block text-text-primary font-bold mb-1">TECH STACK</span>
                                {study.tech.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Narrative Content */}
                <div className="container-custom py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">
                        <Section>
                            <h2 className="text-2xl font-bold mb-4 text-white">The Challenge</h2>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                {study.narrative.problem}
                            </p>
                        </Section>

                        <Section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                {study.narrative.approach}
                            </p>
                        </Section>

                        <Section>
                            {/* Architecture Diagram Visualization Placeholder */}
                            <div className="aspect-video bg-bg-tertiary rounded-xl border border-border-subtle flex items-center justify-center mb-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                <p className="text-text-secondary font-mono text-sm relative z-10">[ Architecture Diagram: {study.title} ]</p>
                            </div>

                            <h2 className="text-2xl font-bold mb-4 text-white">Architecture & Code</h2>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                {study.narrative.architecture}
                            </p>
                        </Section>

                        <Section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Trade-offs & Decisions</h2>
                            <div className="bg-bg-secondary p-8 rounded-xl border-l-4 border-yellow-500">
                                <p className="text-text-secondary italic">
                                    &quot;{study.narrative.tradeoffs}&quot;
                                </p>
                            </div>
                        </Section>
                    </div>

                    {/* Sidebar / Metrics */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">
                            <div className="bg-bg-secondary border border-border-subtle p-6 rounded-xl shadow-2xl">
                                <h3 className="text-lg font-bold mb-6 border-b border-border-subtle pb-4">Key Metrics</h3>
                                <div className="space-y-6">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <div className="text-4xl font-bold text-primary mb-1">{metric.value}</div>
                                            <div className="text-sm text-text-secondary uppercase tracking-widest">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Outcome Section */}
                <Section className="bg-primary/10 border-t border-primary/20">
                    <div className="container-custom text-center max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6">Outcome</h2>
                        <p className="text-xl text-text-primary leading-relaxed">
                            {study.narrative.outcome}
                        </p>
                    </div>
                </Section>
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = caseStudies.map((study) => ({
        params: { slug: study.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const study = caseStudies.find((s) => s.slug === params.slug);
    return {
        props: {
            study,
        },
    };
}
