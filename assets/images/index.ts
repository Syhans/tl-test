const imagesContext = require.context(".", true, /\.(png|jpe?g|svg)$/);

const images: Record<string, any> = imagesContext
    .keys()
    .reduce((images, path) => {
        // Remove the './' from the beginning of the path and the extension from the end
        const key = path.replace(/^\.\/(.*)\.\w+$/, "$1");
        images[key] = imagesContext(path);
        return images;
    }, {} as Record<string, any>);

export default images;
