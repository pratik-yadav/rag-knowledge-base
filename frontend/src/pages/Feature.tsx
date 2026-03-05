import { useState } from 'react';

function Feature() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [docs, setDocs] = useState<FileList | null>(null);
  const [selected, setSelected] = useState<'resume' | 'documents' | null>(null);

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      setSelected('resume');
      setDocs(null);
    }
  };

  const handleDocsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocs(e.target.files);
      setSelected('documents');
      setResumeFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('selected', selected);
    console.log('resume', resumeFile);
    console.log('documents', docs);
    // placeholder for upload logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
        <div className="flex flex-col md:flex-row gap-8">
            {/* Resume upload section */}
          <div
            className={`flex-1 p-4 border transition-opacity duration-200 bg-white rounded-lg shadow-md ${
              selected === 'documents' ? 'opacity-50 pointer-events-none' : ''
            }`}
            onClick={() => selected === null && setSelected('resume')}
          >
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Upload Your Resume
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="w-full"
                  disabled={selected === 'documents'}
                />
                {resumeFile && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {resumeFile.name}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
                disabled={selected === 'documents'}
              >
                Upload Resume
              </button>
            </form>
          </div>

          {/* Documents upload section */}
          <div
            className={`flex-1 p-4 border transition-opacity duration-200 bg-white rounded-lg shadow-md ${
              selected === 'resume' ? 'opacity-50 pointer-events-none' : ''
            }`}
            onClick={() => selected === null && setSelected('documents')}
          >
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Upload Documents (multiple)
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  id="documents"
                  type="file"
                  multiple
                  onChange={handleDocsChange}
                  className="w-full"
                  disabled={selected === 'resume'}
                />
                {docs && docs.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                    {Array.from(docs).map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
                disabled={selected === 'resume'}
              >
                Upload Documents
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;