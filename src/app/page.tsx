import { Mail } from 'lucide-react';
import {siGithub} from 'simple-icons';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">

      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mr-8">
        <h1 className="text-4xl font-bold mb-4">air wish</h1>
        <h2 className="text-xl italic mb-2">@ittuann</h2>
        <p className="text-lg mb-2">Coding with love & magic~ 🌟</p>

        <div className="space-x-4">
          <a
            href="https://github.com/ittuann"
            target="_blank"
            className="underline hover:text-green-600"
          >
            GitHub
          </a>
          <a
            href="mailto:ittuann@outlook.com"
            target="_blank"
            className="underline hover:text-green-600"
          >
            Email
          </a>
        </div>
      </div>

      <div className="md:w-1/3 w-2/3 max-w-xs">
        <img
          src="./avatar.png"
          alt="air wish avatar"
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
}
