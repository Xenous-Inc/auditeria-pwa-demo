import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ServiceWorkerPlugin } from 'service-worker-webpack';
import { ProgressPlugin, DefinePlugin, type WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { type BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev, analyze }: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
        new Dotenv({ systemvars: true }),
        new HtmlWebpackPlugin({
            template: paths.html,
            base: isDev ? '/' : 'https://xenous-inc.github.io/auditeria-pwa-demo/',
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.localesOutput },
                { from: paths.manifest, to: paths.manifestOutput },
                { from: paths.images, to: paths.imagesOutput },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
        }),
        new ServiceWorkerPlugin(
            isDev ? undefined : { registration: { path: '/auditeria-pwa-demo/service-worker.js' } }
        ),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    }

    return plugins;
};
