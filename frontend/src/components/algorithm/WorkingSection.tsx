import React from 'react';
import { Lightbulb } from 'lucide-react';
import type { WorkingStep } from '../../types';

interface WorkingSectionProps {
    steps: WorkingStep[];
}

const WorkingSection: React.FC<WorkingSectionProps> = ({ steps }) => {
    return (
        <div className="card">
            <h2 className="section-title">How It Works</h2>
            <p className="text-gray-400 mb-6">
                Follow these steps to understand the algorithm's execution flow:
            </p>

            <div className="space-y-6">
                {steps.map((step) => (
                    <div key={step.step} className="border-l-4 border-primary-500 pl-6 py-2">
                        <div className="flex items-start gap-3">
                            <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                {step.step}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">{step.title}</h3>
                                <p className="text-gray-300 mb-3">{step.description}</p>

                                {step.variables && step.variables.length > 0 && (
                                    <div className="bg-dark-elevated rounded-lg p-4 mb-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                                            <span className="text-sm font-semibold text-gray-200">Variables Used:</span>
                                        </div>
                                        <div className="space-y-2">
                                            {step.variables.map((variable, idx) => (
                                                <div key={idx} className="text-sm">
                                                    <code className="text-primary-400">{variable.name}</code>
                                                    <span className="text-gray-500"> ({variable.type})</span>
                                                    <span className="text-gray-400"> - {variable.purpose}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {step.codeSnippet && (
                                    <pre className="bg-dark-bg border border-dark-border rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-300">{step.codeSnippet}</code>
                                    </pre>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingSection;
