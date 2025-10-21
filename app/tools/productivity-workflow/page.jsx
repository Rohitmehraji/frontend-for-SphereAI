'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Zap, Loader, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { manageTasks } from '../../lib/aiToolsService';

const ProductivityWorkflowPage = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        setLoading(true);
        setError(null);
        const toastId = toast.loading('Organizing Your Tasks...');

        try {
            const result = await manageTasks({ tasks: input });
            setOutput(result);
            toast.success('Tasks organized successfully!');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to organize tasks.';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
            toast.dismiss(toastId);
        }
    };

    return (
        <div className="p-8 bg-gray-900 text-white min-h-screen">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Productivity & Workflow Orchestration
            </motion.h1>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 flex items-center"><CheckSquare className="mr-2 text-green-400" /> AI Task Prioritization</h2>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-4 bg-gray-700 rounded-md text-white"
                    rows="8"
                    placeholder="Enter a list of your tasks, goals, or to-do items, each on a new line..."
                ></textarea>
                <motion.button
                    onClick={handleGenerate}
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-purple-600 rounded-md flex items-center disabled:opacity-50"
                >
                    {loading ? <><Loader className="animate-spin mr-2" /> Organizing...</> : <><Zap className="inline-block mr-2" /> Organize Tasks</>}
                </motion.button>

                {error && <div className='text-red-400 mt-4 flex items-center'><AlertCircle className='mr-2'/>{error}</div>}

                {output && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Organized Task List:</h3>
                        <pre className="mt-2 p-4 bg-gray-700 rounded-md whitespace-pre-wrap">{JSON.stringify(output, null, 2)}</pre>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ProductivityWorkflowPage;
