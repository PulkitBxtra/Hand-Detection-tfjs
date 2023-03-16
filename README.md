# Hand-Detection-tfjs


This is a React project demo that uses the TensorFlow.js Hand Detection model to detect and track the user's hand movements in real-time.

![Hand Detection Demo](https://i.imgur.com/1ZG9wMK.png)

## Demo

You can try out the demo at: https://hand-detection-tfjs.vercel.app/

## Installation

To install the project, follow these steps:

1. Clone the project repository to your local machine.
2. Install the required dependencies by running `npm install` or `yarn install`.

## Usage

To use the project, follow these steps:

1. Run `npm start` or `yarn start` to start the development server.
2. Open your web browser and navigate to `http://localhost:3000`.
3. Grant permission to access your camera when prompted.
4. Place your hand within the camera's view and move it around to see the hand detection in action.

## Technical Details

This project uses the TensorFlow.js Hand Detection model to detect and track the user's hand movements in real-time. The hand detection model is loaded using the `tf.loadGraphModel()` function and runs inference on each frame of the camera stream using the `tf.tidy()` function to ensure that memory is efficiently managed.

The detected hand landmarks are then used to draw a visual representation of the hand on the canvas using the `CanvasRenderingContext2D` API. The `requestAnimationFrame()` function is used to render the hand detection in real-time at 60 frames per second.

## Acknowledgements

This project was made possible thanks to the TensorFlow.js Hand Detection model, which was developed by Google Research. The hand detection model is based on the MobileNet architecture and was trained on a large dataset of hand images.

## Contributing
I welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear commit messages
4. Push your changes to your forked repository
5. Submit a pull request with a clear description of your changes

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or comments about this project, please contact me at [pulkit2489k@gmail.com](mailto:pulkit2489k@gmail.com)
