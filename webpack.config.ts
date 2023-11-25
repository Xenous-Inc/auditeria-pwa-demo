import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        serviceWorker: path.resolve(__dirname, 'src', 'service-worker.js'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        manifest: path.resolve(__dirname, 'public', 'manifest.json'),
        manifestOutput: path.resolve(__dirname, 'build', 'manifest.json'),
        images: path.resolve(__dirname, 'public', 'logo.png'),
        imagesOutput: path.resolve(__dirname, 'build', 'logo.png'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        localesOutput: path.resolve(__dirname, 'build', 'locales'),
    };

    const mode = env.mode ?? 'development';
    const port = env.port ?? 3000;
    const analyze = env.analyze ?? false;

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        port,
        isDev,
        analyze,
    });
};
