import { View } from "react-native";

import ImageViewer from "./ImageViewer";

const PlaceholderImage = require("../assets/Barnardos.png");

export default function Logo() {
  return (
    <View>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
    </View>
  );
}
