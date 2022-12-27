import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RecentHeader = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={190}
    height={40}
    fill="none"
  >
    <Path
      fill="#393B40"
      d="M9.07 14.104c.828 0 1.53-.102 2.106-.306.588-.216 1.068-.51 1.44-.882.372-.372.642-.804.81-1.296a5.091 5.091 0 0 0 .252-1.62c0-1.152-.378-2.052-1.134-2.7-.744-.648-1.902-.972-3.474-.972H6.622v7.776H9.07zM21.994 28h-5.508c-1.02 0-1.752-.384-2.196-1.152l-4.356-7.614c-.204-.324-.432-.558-.684-.702-.252-.156-.612-.234-1.08-.234H6.622V28H.538V1.774H9.07c1.896 0 3.51.198 4.842.594 1.344.384 2.436.924 3.276 1.62.852.696 1.47 1.518 1.854 2.466.384.948.576 1.98.576 3.096 0 .852-.114 1.656-.342 2.412a7.57 7.57 0 0 1-1.008 2.106 7.691 7.691 0 0 1-1.656 1.71 8.637 8.637 0 0 1-2.25 1.242c.396.204.768.462 1.116.774.348.3.66.66.936 1.08L21.994 28zM33.93 16.426c0-.444-.06-.876-.18-1.296a2.878 2.878 0 0 0-.558-1.116 2.715 2.715 0 0 0-1.008-.81c-.42-.204-.93-.306-1.53-.306-1.056 0-1.884.306-2.484.918-.6.6-.996 1.47-1.188 2.61h6.948zm-7.02 3.24c.18 1.56.654 2.694 1.422 3.402.768.696 1.758 1.044 2.97 1.044.648 0 1.206-.078 1.674-.234a8.06 8.06 0 0 0 1.242-.522l1.008-.522c.312-.156.636-.234.972-.234.444 0 .78.162 1.008.486l1.62 1.998c-.576.66-1.2 1.2-1.872 1.62a10 10 0 0 1-2.052.972c-.696.228-1.398.384-2.106.468-.696.096-1.362.144-1.998.144a10.69 10.69 0 0 1-3.69-.63 8.674 8.674 0 0 1-3.006-1.908c-.852-.84-1.53-1.884-2.034-3.132-.492-1.248-.738-2.7-.738-4.356 0-1.248.21-2.43.63-3.546a8.926 8.926 0 0 1 1.836-2.934 8.866 8.866 0 0 1 2.898-1.998c1.14-.492 2.424-.738 3.852-.738 1.236 0 2.364.192 3.384.576a7.274 7.274 0 0 1 2.646 1.674c.744.732 1.32 1.632 1.728 2.7.42 1.056.63 2.256.63 3.6 0 .42-.018.762-.054 1.026-.036.264-.102.474-.198.63a.75.75 0 0 1-.396.324c-.156.06-.36.09-.612.09H26.91zm28.532-5.904c-.168.204-.33.366-.486.486-.156.12-.378.18-.666.18-.276 0-.528-.066-.756-.198a25.318 25.318 0 0 0-.738-.432 5.24 5.24 0 0 0-.972-.45c-.372-.132-.834-.198-1.386-.198-.684 0-1.278.126-1.782.378-.492.252-.9.612-1.224 1.08-.324.468-.564 1.044-.72 1.728-.156.672-.234 1.434-.234 2.286 0 1.788.342 3.162 1.026 4.122.696.96 1.65 1.44 2.862 1.44.648 0 1.158-.078 1.53-.234.384-.168.708-.348.972-.54l.72-.558c.228-.168.51-.252.846-.252.444 0 .78.162 1.008.486l1.62 1.998a9.051 9.051 0 0 1-1.818 1.62 9.626 9.626 0 0 1-1.962.972 9.846 9.846 0 0 1-1.998.468 13.87 13.87 0 0 1-1.962.144 8.485 8.485 0 0 1-3.276-.648 8.182 8.182 0 0 1-2.736-1.872c-.78-.828-1.404-1.842-1.872-3.042-.456-1.2-.684-2.568-.684-4.104 0-1.344.198-2.598.594-3.762.408-1.176 1.002-2.19 1.782-3.042.792-.864 1.764-1.542 2.916-2.034 1.164-.492 2.508-.738 4.032-.738 1.464 0 2.748.234 3.852.702a9.243 9.243 0 0 1 2.988 2.052l-1.476 1.962zm15.085 2.664c0-.444-.06-.876-.18-1.296a2.878 2.878 0 0 0-.558-1.116 2.715 2.715 0 0 0-1.008-.81c-.42-.204-.93-.306-1.53-.306-1.056 0-1.884.306-2.484.918-.6.6-.996 1.47-1.188 2.61h6.948zm-7.02 3.24c.18 1.56.654 2.694 1.422 3.402.768.696 1.758 1.044 2.97 1.044.648 0 1.206-.078 1.674-.234a8.06 8.06 0 0 0 1.242-.522l1.008-.522c.312-.156.636-.234.972-.234.444 0 .78.162 1.008.486l1.62 1.998c-.576.66-1.2 1.2-1.872 1.62a10 10 0 0 1-2.052.972c-.696.228-1.398.384-2.106.468-.696.096-1.362.144-1.998.144a10.69 10.69 0 0 1-3.69-.63A8.674 8.674 0 0 1 60.7 25.75c-.852-.84-1.53-1.884-2.034-3.132-.492-1.248-.738-2.7-.738-4.356 0-1.248.21-2.43.63-3.546a8.926 8.926 0 0 1 1.836-2.934 8.866 8.866 0 0 1 2.898-1.998c1.14-.492 2.424-.738 3.852-.738 1.236 0 2.364.192 3.384.576a7.274 7.274 0 0 1 2.646 1.674c.744.732 1.32 1.632 1.728 2.7.42 1.056.63 2.256.63 3.6 0 .42-.018.762-.054 1.026-.036.264-.102.474-.198.63a.75.75 0 0 1-.396.324c-.156.06-.36.09-.612.09H63.507zm19.965-8.316c.36-.336.732-.648 1.116-.936a6.297 6.297 0 0 1 1.224-.72c.444-.204.918-.36 1.422-.468a7.382 7.382 0 0 1 1.674-.18c1.02 0 1.92.18 2.7.54.792.348 1.458.84 1.998 1.476.54.624.948 1.374 1.224 2.25.276.864.414 1.806.414 2.826V28h-5.58V16.138c0-.912-.21-1.62-.63-2.124-.42-.516-1.038-.774-1.854-.774-.612 0-1.188.132-1.728.396-.528.252-1.044.6-1.548 1.044V28h-5.58V9.334h3.456c.696 0 1.152.312 1.368.936l.324 1.08zm21.815 16.938c-.888 0-1.674-.126-2.358-.378a4.934 4.934 0 0 1-1.71-1.098 4.833 4.833 0 0 1-1.044-1.728c-.24-.672-.36-1.422-.36-2.25v-9.648H98.23c-.288 0-.534-.09-.738-.27-.204-.192-.306-.468-.306-.828V9.91l2.97-.576 1.098-4.554c.144-.576.552-.864 1.224-.864h2.916V9.37h4.626v3.816h-4.626v9.27c0 .432.102.792.306 1.08.216.276.522.414.918.414.204 0 .372-.018.504-.054.144-.048.264-.096.36-.144.108-.06.204-.108.288-.144a.714.714 0 0 1 .324-.072c.168 0 .3.042.396.126.108.072.216.192.324.36l1.692 2.646c-.72.54-1.53.948-2.43 1.224a9.86 9.86 0 0 1-2.79.396zM143.56 1.774 133.048 28h-5.508L117.028 1.774h4.896c.528 0 .954.126 1.278.378.324.24.57.552.738.936l5.076 14.04c.24.612.474 1.284.702 2.016.228.72.444 1.476.648 2.268.168-.792.354-1.548.558-2.268.216-.732.444-1.404.684-2.016l5.04-14.04c.132-.336.366-.636.702-.9.348-.276.774-.414 1.278-.414h4.932zm7.126 7.56V28h-5.58V9.334h5.58zm.576-5.112c0 .444-.09.864-.27 1.26-.18.384-.426.726-.738 1.026a3.822 3.822 0 0 1-1.098.702 3.417 3.417 0 0 1-1.314.252c-.456 0-.882-.084-1.278-.252a3.985 3.985 0 0 1-1.062-.702c-.3-.3-.54-.642-.72-1.026a3.193 3.193 0 0 1-.252-1.26c0-.456.084-.882.252-1.278.18-.396.42-.744.72-1.044.312-.3.666-.534 1.062-.702a3.238 3.238 0 0 1 1.278-.252c.468 0 .906.084 1.314.252a3.374 3.374 0 0 1 1.836 1.746c.18.396.27.822.27 1.278zm15.178 9.198c-.144.228-.3.39-.468.486-.156.096-.36.144-.612.144-.264 0-.528-.054-.792-.162-.264-.12-.552-.246-.864-.378a7.8 7.8 0 0 0-1.026-.36 4.404 4.404 0 0 0-1.314-.18c-.708 0-1.254.138-1.638.414-.372.264-.558.636-.558 1.116 0 .348.12.636.36.864.252.228.582.432.99.612.408.168.87.33 1.386.486.516.156 1.044.33 1.584.522s1.068.42 1.584.684c.516.252.978.57 1.386.954.408.372.732.828.972 1.368.252.54.378 1.188.378 1.944 0 .924-.168 1.776-.504 2.556a5.388 5.388 0 0 1-1.512 2.016c-.66.564-1.482 1.002-2.466 1.314-.972.312-2.094.468-3.366.468-.636 0-1.272-.06-1.908-.18a13.564 13.564 0 0 1-1.854-.486 10.716 10.716 0 0 1-1.638-.72 7.472 7.472 0 0 1-1.296-.918l1.296-2.052c.144-.24.324-.426.54-.558.228-.144.516-.216.864-.216.324 0 .612.072.864.216.264.144.546.3.846.468.3.168.648.324 1.044.468.408.144.918.216 1.53.216.432 0 .798-.042 1.098-.126.3-.096.54-.222.72-.378.18-.156.312-.33.396-.522.084-.192.126-.39.126-.594 0-.372-.126-.678-.378-.918s-.582-.444-.99-.612a10.03 10.03 0 0 0-1.404-.486 34.75 34.75 0 0 1-1.584-.522c-.54-.192-1.074-.42-1.602-.684a5.85 5.85 0 0 1-1.386-1.026 4.879 4.879 0 0 1-.99-1.53c-.252-.6-.379-1.326-.379-2.178 0-.792.151-1.542.451-2.25a5.32 5.32 0 0 1 1.386-1.89c.612-.54 1.38-.966 2.304-1.278.924-.324 2.004-.486 3.24-.486.672 0 1.32.06 1.944.18.636.12 1.23.288 1.782.504a8.134 8.134 0 0 1 1.512.774c.456.288.858.606 1.206.954l-1.26 1.962zm9.875-4.086V28h-5.58V9.334h5.58zm.576-5.112c0 .444-.09.864-.27 1.26-.18.384-.426.726-.738 1.026a3.822 3.822 0 0 1-1.098.702 3.417 3.417 0 0 1-1.314.252c-.456 0-.882-.084-1.278-.252a3.985 3.985 0 0 1-1.062-.702c-.3-.3-.54-.642-.72-1.026a3.193 3.193 0 0 1-.252-1.26c0-.456.084-.882.252-1.278.18-.396.42-.744.72-1.044.312-.3.666-.534 1.062-.702a3.238 3.238 0 0 1 1.278-.252c.468 0 .906.084 1.314.252a3.374 3.374 0 0 1 1.836 1.746c.18.396.27.822.27 1.278zm9.993 24.066c-.888 0-1.674-.126-2.358-.378a4.934 4.934 0 0 1-1.71-1.098 4.833 4.833 0 0 1-1.044-1.728c-.24-.672-.36-1.422-.36-2.25v-9.648h-1.584c-.288 0-.534-.09-.738-.27-.204-.192-.306-.468-.306-.828V9.91l2.97-.576 1.098-4.554c.144-.576.552-.864 1.224-.864h2.916V9.37h4.626v3.816h-4.626v9.27c0 .432.102.792.306 1.08.216.276.522.414.918.414.204 0 .372-.018.504-.054.144-.048.264-.096.36-.144.108-.06.204-.108.288-.144a.714.714 0 0 1 .324-.072c.168 0 .3.042.396.126.108.072.216.192.324.36l1.692 2.646c-.72.54-1.53.948-2.43 1.224a9.86 9.86 0 0 1-2.79.396z"
    />
  </Svg>
)

export default RecentHeader