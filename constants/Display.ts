import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

/**Used for setting the height of an element 
 * 
 * @param height - height of an element/tag
 * 
 * @returns setHeight 
 * Return the height of an element/tag respective to the size of the screen
 * 
 * */
const setHeight = (elementHeight: number) => (height / 100) * elementHeight;

/**Used for setting the width of an element 
 * 
 * @param width - width of an element/tag
 * 
 * @returns setWidth 
 * Return the width of an element/tag respective to the size of the screen
 * 
 * */
const setWidth = (elementWidth: number) => (width / 100) * elementWidth;

export default { setHeight, setWidth };
