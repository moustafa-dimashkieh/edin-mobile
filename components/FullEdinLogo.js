import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FullEdinLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={260}
    height={240}
    fill="none"
  >
    <Path
      fill="#E8546D"
      d="m239.549 34.455.552-.554c7.744-7.744 7.745-20.346 0-28.092-7.746-7.745-20.348-7.745-28.093 0l-.553.552-.552-.552c-7.746-7.745-20.349-7.745-28.094 0-7.745 7.746-7.745 20.348.001 28.092l.552.554-.552.552c-7.746 7.745-7.746 20.347-.001 28.094 7.746 7.745 20.349 7.745 28.094 0l.552-.553.553.553c7.745 7.745 20.347 7.745 28.093 0 7.745-7.747 7.744-20.349 0-28.094l-.552-.552zm-25.096-26.2c6.397-6.396 16.804-6.396 23.2 0 6.396 6.397 6.396 16.805.001 23.2L219.03 50.08c-1.425 1.427-1.773 3.119-.083 4.828l.636.618c3.568 3.568 9.373 3.568 12.941 0 3.568-3.568 3.568-9.374.001-12.942l-.553-.553 1.341-1.34.553.553c4.308 4.306 4.308 11.316 0 15.623-4.307 4.307-11.317 4.307-15.624 0 0 0-.271-.228-.638-.597-.337-.343-3.693-3.751.086-7.53l18.622-18.624c5.658-5.657 5.658-14.86 0-20.518-5.657-5.656-14.86-5.656-20.517 0l-.553.553L213.9 8.81l.553-.554zm15.625 44.824a5.7 5.7 0 0 1-8.05 0l-.552-.553 8.049-8.05.553.552a5.7 5.7 0 0 1 0 8.051zM185.255 8.255c6.397-6.396 16.805-6.396 23.202 0l18.621 18.622-1.341 1.343-18.623-18.623c-5.657-5.657-14.86-5.657-20.516 0-5.658 5.657-5.658 14.86 0 20.517l.552.553-1.342 1.342-.553-.552c-6.396-6.397-6.396-16.805 0-23.202zm36.222 8.128.552-.553a5.7 5.7 0 0 1 8.05 0 5.702 5.702 0 0 1 0 8.05l-.553.552-8.049-8.049zM192.16 40.807l-1.775 1.775c-3.569 3.568-3.568 9.374 0 12.942 3.567 3.568 9.373 3.568 12.941 0l.553-.553c2.726-2.725-.555-5.44-2.134-7.019l-1.029-1.037-4.887-4.887 1.342-1.34 6.5 6.5.513.514c4.779 4.778 1.407 8.24 1.036 8.61l-.553.553c-4.307 4.309-11.316 4.306-15.625 0-4.307-4.307-4.307-11.317.001-15.626l18.624-18.622 1.341 1.343-9.273 9.271-7.575 7.576zm1.223 3.67 8.049 8.048-.553.553a5.697 5.697 0 0 1-8.048 0 5.699 5.699 0 0 1 0-8.05l.552-.55zm18.071-18.071 8.049 8.049-8.049 8.048-8.049-8.048 8.049-8.05zm-8.127-13.02c-3.568-3.57-9.374-3.569-12.942 0-3.568 3.566-3.568 9.373 0 12.94l.552.553-1.341 1.341-.553-.552c-4.308-4.308-4.307-11.317 0-15.626 4.308-4.306 11.317-4.307 15.625 0l18.623 18.624-1.341 1.341-18.623-18.622zm-1.895 2.998-8.049 8.048-.552-.552a5.699 5.699 0 0 1-.001-8.05 5.697 5.697 0 0 1 8.049.002l.553.552zm36.221 44.27c-6.396 6.396-16.803 6.396-23.2 0l-.696-.623c-.151-.152-1.434-1.426-2.379-3.395a13.59 13.59 0 0 1-2.369 3.465l-.552.553c-6.397 6.396-16.805 6.396-23.202 0-6.396-6.397-6.396-16.804 0-23.202l18.624-18.622 1.341 1.342-18.622 18.623c-5.658 5.657-5.658 14.86 0 20.517 5.656 5.658 14.86 5.658 20.516 0l.583-.583c1.469-1.525 2.577-3.877 2.659-6.3 0-.072.006-.143.007-.213.017-1.894-.603-3.814-2.19-5.402l-2.955-2.955-.284-.303-5.316-5.314 1.342-1.342 7.421 7.421.623.634c1.101 1.102 1.883 2.199 2.42 3.269.54-1.032 1.306-2.09 2.375-3.16l.103-.114 18.624-18.623c3.567-3.568 3.567-9.374-.001-12.942-3.567-3.568-9.373-3.568-12.941 0l-.553.553-1.341-1.341.553-.554c4.306-4.307 11.317-4.307 15.624 0 4.308 4.309 4.308 11.317 0 15.624l-18.626 18.624-.587.59c-3.727 3.727-2.263 9.065.462 11.789l.679.642c5.656 5.658 14.86 5.658 20.516 0 5.658-5.656 5.658-14.86 0-20.517l-.552-.553L237.1 36.9l.553.553c6.396 6.397 6.396 16.804 0 23.2zM3.393 58.755c-.912 0-1.68-.31-2.301-.932-.622-.62-.933-1.387-.933-2.298v-42.05c0-.952.31-1.719.933-2.298.622-.621 1.389-.932 2.3-.932h28.11c.954 0 1.72.29 2.301.87.58.538.87 1.262.87 2.174 0 .87-.29 1.573-.87 2.111-.58.539-1.347.808-2.3.808H6.626V31.3h17.848c.912 0 1.658.29 2.239.87.622.538.932 1.242.932 2.112 0 .87-.31 1.594-.932 2.173-.58.539-1.327.808-2.24.808H6.628v15.528h24.875c.954 0 1.72.27 2.301.808.58.538.87 1.242.87 2.111 0 .912-.29 1.657-.87 2.236-.58.539-1.347.808-2.3.808H3.392zm46.938 0c-.912 0-1.679-.31-2.3-.932-.623-.62-.934-1.387-.934-2.298v-42.05c0-.952.311-1.719.933-2.298.622-.621 1.39-.932 2.301-.932h11.256c4.685 0 8.852 1.035 12.5 3.106 3.649 2.07 6.489 4.948 8.52 8.633 2.032 3.644 3.048 7.806 3.048 12.485 0 4.68-1.016 8.861-3.048 12.547-2.031 3.685-4.871 6.563-8.52 8.633-3.648 2.07-7.815 3.106-12.5 3.106H50.331zm11.256-5.714c3.442 0 6.51-.787 9.204-2.36 2.737-1.574 4.851-3.769 6.344-6.585 1.534-2.857 2.3-6.066 2.3-9.627 0-3.561-.766-6.75-2.3-9.565-1.493-2.816-3.607-5.01-6.344-6.584-2.694-1.574-5.762-2.36-9.203-2.36h-8.023v37.08h8.023zm40.906 5.714c-.912 0-1.679-.31-2.301-.932-.622-.62-.933-1.387-.933-2.298v-42.05c0-.952.31-1.719.933-2.298.622-.621 1.389-.932 2.301-.932.953 0 1.72.31 2.301.932.622.58.933 1.346.933 2.298v42.05c0 .911-.311 1.677-.933 2.298-.581.621-1.348.932-2.301.932zm22.341 0c-.912 0-1.679-.29-2.301-.87-.581-.62-.871-1.407-.871-2.36v-42.05c0-.952.29-1.719.871-2.298.622-.621 1.389-.932 2.301-.932.456 0 .912.124 1.368.373.456.207.829.476 1.119.807l27.115 36.025V13.475c0-.952.311-1.719.932-2.298.622-.621 1.389-.932 2.301-.932.912 0 1.659.31 2.239.932.622.58.933 1.346.933 2.298v42.05c0 .953-.311 1.74-.933 2.36-.58.58-1.327.87-2.239.87-.456 0-.932-.083-1.43-.248a2.454 2.454 0 0 1-1.057-.87l-27.115-36.025v33.913c0 .911-.31 1.677-.932 2.298-.581.621-1.348.932-2.301.932z"
    />
  </Svg>
)

export default FullEdinLogo