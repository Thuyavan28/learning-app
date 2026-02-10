// Pyodide runner utility for executing Python code in the browser
let pyodideInstance: any = null;
let pyodideLoading: Promise<any> | null = null;

export const initPyodide = async () => {
    if (pyodideInstance) {
        return pyodideInstance;
    }

    if (pyodideLoading) {
        return pyodideLoading;
    }

    pyodideLoading = (async () => {
        try {
            // @ts-ignore
            const pyodide = await loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
            });
            pyodideInstance = pyodide;
            return pyodide;
        } catch (error) {
            console.error('Failed to load Pyodide:', error);
            throw error;
        }
    })();

    return pyodideLoading;
};

export interface ExecutionResult {
    success: boolean;
    output?: string;
    error?: string;
}

export const runPythonCode = async (code: string): Promise<ExecutionResult> => {
    try {
        const pyodide = await initPyodide();

        // Capture stdout
        await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
    `);

        // Run the user code
        try {
            await pyodide.runPythonAsync(code);

            // Get stdout
            const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
            const stderr = await pyodide.runPythonAsync('sys.stderr.getvalue()');

            if (stderr) {
                return {
                    success: false,
                    error: stderr,
                };
            }

            return {
                success: true,
                output: stdout || 'Code executed successfully (no output)',
            };
        } catch (error: any) {
            return {
                success: false,
                error: `Runtime Error: ${error.message}`,
            };
        }
    } catch (error: any) {
        return {
            success: false,
            error: `Failed to initialize Python environment: ${error.message}`,
        };
    }
};
