import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import Svg, { Path } from "react-native-svg"

import FullEdinLogo from '../../components/FullEdinLogo';
import styles from './styles';

const Choice = ({ navigation }) => {

  const welcomeSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={260}
      height={100}
      fill="none"
    >
      <Path
        fill="#fff"
        d="M16.188 9.612v6.72a9.91 9.91 0 0 1-2.784 1.404c-.984.304-2.056.456-3.216.456-1.392 0-2.652-.216-3.78-.648-1.12-.432-2.076-1.036-2.868-1.812a8.01 8.01 0 0 1-1.836-2.784c-.424-1.08-.636-2.268-.636-3.564 0-1.304.204-2.496.612-3.576.416-1.088 1.008-2.016 1.776-2.784.768-.776 1.696-1.376 2.784-1.8C7.336.792 8.564.576 9.924.576a10.9 10.9 0 0 1 1.908.156c.592.104 1.14.252 1.644.444a7.54 7.54 0 0 1 1.392.696 7.83 7.83 0 0 1 1.2.9l-.732 1.152a.728.728 0 0 1-.444.348c-.184.048-.384.004-.6-.132-.208-.12-.44-.26-.696-.42a4.965 4.965 0 0 0-.9-.444 7.391 7.391 0 0 0-1.212-.348 8.209 8.209 0 0 0-1.644-.144c-.944 0-1.796.156-2.556.468a5.311 5.311 0 0 0-1.944 1.32c-.536.576-.948 1.272-1.236 2.088-.288.808-.432 1.716-.432 2.724 0 1.056.152 2.004.456 2.844.304.832.732 1.54 1.284 2.124a5.57 5.57 0 0 0 2.028 1.32c.8.304 1.692.456 2.676.456.384 0 .74-.02 1.068-.06.336-.048.656-.112.96-.192.304-.08.596-.18.876-.3.288-.12.572-.252.852-.396v-3.612h-2.544a.561.561 0 0 1-.396-.144.488.488 0 0 1-.144-.36V9.612h5.4zm9.446 2.976c-.953.032-1.76.108-2.425.228-.663.112-1.203.264-1.62.456-.415.192-.715.42-.9.684a1.445 1.445 0 0 0-.276.864 2 2 0 0 0 .145.792c.104.216.24.396.407.54.177.136.38.236.613.3.232.064.483.096.756.096a4.166 4.166 0 0 0 1.835-.408c.264-.136.517-.3.756-.492a6.84 6.84 0 0 0 .709-.66v-2.4zM18.77 7.512c.68-.648 1.416-1.132 2.207-1.452.8-.32 1.677-.48 2.628-.48.697 0 1.313.116 1.848.348.537.224.989.54 1.357.948.367.408.643.896.828 1.464.191.568.287 1.196.287 1.884V18h-1.044c-.232 0-.407-.036-.527-.108-.12-.08-.216-.224-.288-.432l-.252-1.068c-.313.288-.62.544-.924.768a6.42 6.42 0 0 1-.96.564c-.328.152-.68.268-1.056.348-.377.08-.793.12-1.248.12-.48 0-.933-.064-1.357-.192a3.113 3.113 0 0 1-1.091-.612 2.928 2.928 0 0 1-.745-1.02c-.175-.408-.264-.884-.264-1.428 0-.48.128-.94.384-1.38.264-.448.688-.848 1.273-1.2.591-.352 1.36-.64 2.303-.864.952-.224 2.12-.352 3.505-.384v-.888c0-.92-.197-1.608-.588-2.064-.392-.456-.968-.684-1.729-.684-.512 0-.944.064-1.296.192a4.964 4.964 0 0 0-.9.432 23.26 23.26 0 0 0-.66.42.994.994 0 0 1-.575.192c-.16 0-.3-.044-.42-.132a1.14 1.14 0 0 1-.277-.312l-.42-.756zm15.94 10.68c-.984 0-1.744-.276-2.28-.828-.528-.552-.792-1.34-.792-2.364V7.704h-1.416a.526.526 0 0 1-.348-.12c-.088-.088-.132-.216-.132-.384v-.948l1.98-.276.528-3.636a.55.55 0 0 1 .18-.312.543.543 0 0 1 .36-.12h1.188V6h3.456v1.704h-3.456v7.14c0 .48.116.84.348 1.08.24.232.544.348.912.348.216 0 .4-.028.552-.084.16-.056.296-.116.408-.18.112-.072.208-.136.288-.192a.39.39 0 0 1 .216-.084c.08 0 .14.02.18.06a.52.52 0 0 1 .144.168l.696 1.128c-.384.352-.84.624-1.368.816a4.774 4.774 0 0 1-1.644.288zm7.22-10.836a6.707 6.707 0 0 1 1.691-1.26c.624-.32 1.34-.48 2.148-.48.672 0 1.26.112 1.764.336.512.224.94.54 1.284.948.344.4.604.884.78 1.452.176.568.264 1.196.264 1.884V18H47.51v-7.764c0-.872-.2-1.548-.6-2.028-.4-.488-1.012-.732-1.836-.732-.6 0-1.164.144-1.692.432-.52.28-1.004.664-1.452 1.152V18h-2.34V.288h2.34v7.068zm19.165 3.192c0-.464-.068-.892-.204-1.284a2.843 2.843 0 0 0-.576-1.02 2.646 2.646 0 0 0-.936-.672 3.165 3.165 0 0 0-1.272-.24c-.984 0-1.76.284-2.328.852-.56.568-.916 1.356-1.068 2.364h6.384zm1.932 5.712c-.288.336-.62.628-.996.876-.376.24-.776.436-1.2.588a7.256 7.256 0 0 1-1.32.336 8.383 8.383 0 0 1-1.332.108 6.4 6.4 0 0 1-2.34-.42 5.366 5.366 0 0 1-1.86-1.248c-.52-.552-.928-1.232-1.224-2.04-.288-.816-.432-1.752-.432-2.808 0-.848.132-1.636.396-2.364a5.745 5.745 0 0 1 1.128-1.92 5.29 5.29 0 0 1 1.812-1.284c.712-.312 1.512-.468 2.4-.468.744 0 1.428.124 2.052.372.632.24 1.176.592 1.632 1.056.456.464.812 1.036 1.068 1.716.264.68.396 1.456.396 2.328 0 .36-.04.604-.12.732-.08.12-.228.18-.444.18h-7.992c.024.728.128 1.364.312 1.908.184.536.436.984.756 1.344.328.36.716.628 1.164.804.448.176.948.264 1.5.264.52 0 .968-.06 1.344-.18.384-.12.712-.248.984-.384.28-.144.512-.276.696-.396.192-.12.36-.18.504-.18.192 0 .34.072.444.216l.672.864zm4.903-8.112c.392-.8.864-1.428 1.416-1.884.552-.456 1.216-.684 1.992-.684.264 0 .512.032.744.096.24.056.448.144.624.264l-.156 1.764c-.056.216-.188.324-.396.324-.112 0-.28-.02-.504-.06a3.433 3.433 0 0 0-.72-.072c-.376 0-.708.056-.996.168a2.265 2.265 0 0 0-.78.48 3.196 3.196 0 0 0-.6.78c-.176.304-.34.652-.492 1.044V18h-2.34V5.808h1.344c.256 0 .428.048.516.144.096.088.164.248.204.48l.144 1.716zm28.6-2.34L92.606 18h-1.872c-.224 0-.376-.148-.456-.444L87.71 9.612a9.454 9.454 0 0 1-.3-1.188c-.072.416-.172.82-.3 1.212l-2.604 7.92c-.08.296-.252.444-.516.444h-1.776L78.278 5.808h1.848a.75.75 0 0 1 .456.132c.128.088.212.2.252.336l2.196 7.488c.072.304.136.6.192.888.056.288.108.576.156.864.072-.288.148-.576.228-.864.088-.288.176-.584.264-.888l2.436-7.536a.591.591 0 0 1 .228-.324.64.64 0 0 1 .408-.132h1.02c.176 0 .32.044.432.132.12.08.2.188.24.324l2.376 7.536c.088.304.172.604.252.9.08.288.152.58.216.876.048-.288.104-.576.168-.864.064-.296.136-.6.216-.912l2.232-7.488a.628.628 0 0 1 .24-.336.745.745 0 0 1 .432-.132h1.764zm4.429 0V18h-2.34V5.808h2.34zm.444-3.768c0 .216-.044.424-.132.624a1.765 1.765 0 0 1-.36.516c-.144.144-.316.26-.516.348a1.664 1.664 0 0 1-1.236 0 1.89 1.89 0 0 1-.516-.348 1.89 1.89 0 0 1-.348-.516c-.08-.2-.12-.408-.12-.624 0-.224.04-.432.12-.624.088-.2.204-.372.348-.516.152-.152.324-.268.516-.348.192-.088.396-.132.612-.132.216 0 .424.044.624.132.2.08.372.196.516.348.152.144.272.316.36.516.088.192.132.4.132.624zm6.76 16.152c-.984 0-1.744-.276-2.28-.828-.528-.552-.792-1.34-.792-2.364V7.704h-1.416a.526.526 0 0 1-.348-.12c-.088-.088-.132-.216-.132-.384v-.948l1.98-.276.528-3.636a.55.55 0 0 1 .18-.312.543.543 0 0 1 .36-.12h1.188V6h3.456v1.704h-3.456v7.14c0 .48.116.84.348 1.08.24.232.544.348.912.348.216 0 .4-.028.552-.084.16-.056.296-.116.408-.18.112-.072.208-.136.288-.192a.39.39 0 0 1 .216-.084c.08 0 .14.02.18.06a.52.52 0 0 1 .144.168l.696 1.128c-.384.352-.84.624-1.368.816a4.774 4.774 0 0 1-1.644.288zm7.219-10.836a6.707 6.707 0 0 1 1.692-1.26c.624-.32 1.34-.48 2.148-.48.672 0 1.26.112 1.764.336.512.224.94.54 1.284.948.344.4.604.884.78 1.452.176.568.264 1.196.264 1.884V18h-2.352v-7.764c0-.872-.2-1.548-.6-2.028-.4-.488-1.012-.732-1.836-.732-.6 0-1.164.144-1.692.432-.52.28-1.004.664-1.452 1.152V18h-2.34V.288h2.34v7.068zM133.346 18V7.728l-1.272-.156a1.19 1.19 0 0 1-.456-.192.508.508 0 0 1-.168-.408V6h1.896V4.896c0-.696.1-1.316.3-1.86.2-.544.484-1.004.852-1.38a3.6 3.6 0 0 1 1.344-.864c.528-.2 1.12-.3 1.776-.3.552 0 1.06.08 1.524.24l-.048 1.176a.367.367 0 0 1-.096.24.55.55 0 0 1-.228.108c-.088.024-.2.04-.336.048h-.42c-.36 0-.688.044-.984.132a1.758 1.758 0 0 0-.756.444 2.041 2.041 0 0 0-.48.828c-.112.336-.168.756-.168 1.26V6h3.42v1.704h-3.348V18h-2.352zm9.865-9.852c.392-.8.864-1.428 1.416-1.884.552-.456 1.216-.684 1.992-.684.264 0 .512.032.744.096.24.056.448.144.624.264l-.156 1.764c-.056.216-.188.324-.396.324-.112 0-.28-.02-.504-.06a3.433 3.433 0 0 0-.72-.072c-.376 0-.708.056-.996.168a2.265 2.265 0 0 0-.78.48 3.196 3.196 0 0 0-.6.78c-.176.304-.34.652-.492 1.044V18h-2.34V5.808h1.344c.256 0 .428.048.516.144.096.088.164.248.204.48l.144 1.716zm9.029-2.34V18h-2.34V5.808h2.34zm.444-3.768c0 .216-.044.424-.132.624a1.765 1.765 0 0 1-.36.516c-.144.144-.316.26-.516.348a1.665 1.665 0 0 1-1.236 0 1.89 1.89 0 0 1-.516-.348 1.89 1.89 0 0 1-.348-.516c-.08-.2-.12-.408-.12-.624 0-.224.04-.432.12-.624.088-.2.204-.372.348-.516.152-.152.324-.268.516-.348.192-.088.396-.132.612-.132.216 0 .424.044.624.132.2.08.372.196.516.348.152.144.272.316.36.516.088.192.132.4.132.624zm11.02 8.508c0-.464-.068-.892-.204-1.284a2.843 2.843 0 0 0-.576-1.02 2.646 2.646 0 0 0-.936-.672 3.165 3.165 0 0 0-1.272-.24c-.984 0-1.76.284-2.328.852-.56.568-.916 1.356-1.068 2.364h6.384zm1.932 5.712c-.288.336-.62.628-.996.876-.376.24-.776.436-1.2.588a7.256 7.256 0 0 1-1.32.336 8.383 8.383 0 0 1-1.332.108 6.4 6.4 0 0 1-2.34-.42 5.366 5.366 0 0 1-1.86-1.248c-.52-.552-.928-1.232-1.224-2.04-.288-.816-.432-1.752-.432-2.808 0-.848.132-1.636.396-2.364a5.745 5.745 0 0 1 1.128-1.92 5.29 5.29 0 0 1 1.812-1.284c.712-.312 1.512-.468 2.4-.468.744 0 1.428.124 2.052.372.632.24 1.176.592 1.632 1.056.456.464.812 1.036 1.068 1.716.264.68.396 1.456.396 2.328 0 .36-.04.604-.12.732-.08.12-.228.18-.444.18h-7.992c.024.728.128 1.364.312 1.908.184.536.436.984.756 1.344.328.36.716.628 1.164.804.448.176.948.264 1.5.264.52 0 .968-.06 1.344-.18.384-.12.712-.248.984-.384.28-.144.512-.276.696-.396.192-.12.36-.18.504-.18.192 0 .34.072.444.216l.672.864zm4.892-8.76c.264-.28.54-.536.828-.768.288-.232.592-.428.912-.588a4.657 4.657 0 0 1 1.044-.384 4.836 4.836 0 0 1 1.2-.144c.672 0 1.26.112 1.764.336.512.224.94.54 1.284.948.344.4.604.884.78 1.452.176.568.264 1.196.264 1.884V18h-2.352v-7.764c0-.872-.2-1.548-.6-2.028-.4-.488-1.012-.732-1.836-.732-.6 0-1.164.144-1.692.432-.52.28-1.004.664-1.452 1.152V18h-2.34V5.808h1.404c.328 0 .532.156.612.468l.18 1.224zm19.093 1.26c-.384-.504-.8-.856-1.248-1.056-.44-.2-.936-.3-1.488-.3-1.072 0-1.904.388-2.496 1.164-.584.768-.876 1.892-.876 3.372 0 .776.064 1.44.192 1.992.136.544.328.992.576 1.344.256.344.568.6.936.768a3.1 3.1 0 0 0 1.248.24c.68 0 1.268-.152 1.764-.456.496-.304.96-.732 1.392-1.284V8.76zm2.352-8.472V18h-1.416c-.328 0-.532-.156-.612-.468l-.204-1.404a6.524 6.524 0 0 1-1.776 1.488c-.656.368-1.416.552-2.28.552a4.333 4.333 0 0 1-1.896-.408 4.017 4.017 0 0 1-1.44-1.188c-.4-.528-.708-1.18-.924-1.956-.216-.776-.324-1.668-.324-2.676 0-.904.12-1.744.36-2.52a6.026 6.026 0 0 1 1.044-2.016 4.86 4.86 0 0 1 1.656-1.332c.648-.328 1.38-.492 2.196-.492.736 0 1.36.12 1.872.36.52.24.984.58 1.392 1.02V.288h2.352zm10.453 7.62a.723.723 0 0 1-.204.228.564.564 0 0 1-.276.06.916.916 0 0 1-.432-.132 7.18 7.18 0 0 0-.564-.288 5.194 5.194 0 0 0-.768-.288 3.73 3.73 0 0 0-1.056-.132 3.07 3.07 0 0 0-.924.132 2.03 2.03 0 0 0-.696.348 1.482 1.482 0 0 0-.6 1.176c0 .304.088.556.264.756.184.2.42.372.708.516.296.144.628.276.996.396.376.112.756.232 1.14.36.392.128.772.276 1.14.444.376.16.708.364.996.612.296.24.532.532.708.876.184.344.276.764.276 1.26 0 .568-.104 1.096-.312 1.584-.2.48-.5.896-.9 1.248-.392.352-.88.628-1.464.828-.584.2-1.252.3-2.004.3-.84 0-1.616-.14-2.328-.42-.712-.28-1.308-.636-1.788-1.068l.552-.9a.664.664 0 0 1 .624-.348c.152 0 .308.056.468.168.16.112.352.236.576.372.224.128.496.248.816.36.32.104.72.156 1.2.156.4 0 .748-.048 1.044-.144.296-.104.54-.24.732-.408.2-.176.348-.376.444-.6.096-.224.144-.46.144-.708 0-.32-.092-.584-.276-.792a2.18 2.18 0 0 0-.708-.552 5.497 5.497 0 0 0-.996-.396c-.376-.112-.76-.232-1.152-.36a11.803 11.803 0 0 1-1.152-.444 4.065 4.065 0 0 1-1.008-.636 3.078 3.078 0 0 1-.708-.936c-.176-.368-.264-.816-.264-1.344 0-.472.096-.924.288-1.356.2-.432.484-.812.852-1.14a4.198 4.198 0 0 1 1.38-.78c.552-.2 1.18-.3 1.884-.3.808 0 1.536.128 2.184.384a5.005 5.005 0 0 1 1.68 1.056l-.516.852zm15.864 4.68c-.952.032-1.76.108-2.424.228-.664.112-1.204.264-1.62.456-.416.192-.716.42-.9.684a1.445 1.445 0 0 0-.276.864 2 2 0 0 0 .144.792c.104.216.24.396.408.54.176.136.38.236.612.3.232.064.484.096.756.096a4.166 4.166 0 0 0 1.836-.408c.264-.136.516-.3.756-.492s.476-.412.708-.66v-2.4zm-6.864-5.076c.68-.648 1.416-1.132 2.208-1.452.8-.32 1.676-.48 2.628-.48.696 0 1.312.116 1.848.348.536.224.988.54 1.356.948.368.408.644.896.828 1.464.192.568.288 1.196.288 1.884V18h-1.044c-.232 0-.408-.036-.528-.108-.12-.08-.216-.224-.288-.432l-.252-1.068c-.312.288-.62.544-.924.768a6.42 6.42 0 0 1-.96.564c-.328.152-.68.268-1.056.348-.376.08-.792.12-1.248.12-.48 0-.932-.064-1.356-.192a3.113 3.113 0 0 1-1.092-.612 2.928 2.928 0 0 1-.744-1.02c-.176-.408-.264-.884-.264-1.428 0-.48.128-.94.384-1.38.264-.448.688-.848 1.272-1.2.592-.352 1.36-.64 2.304-.864.952-.224 2.12-.352 3.504-.384v-.888c0-.92-.196-1.608-.588-2.064-.392-.456-.968-.684-1.728-.684-.512 0-.944.064-1.296.192a4.964 4.964 0 0 0-.9.432c-.248.152-.468.292-.66.42a.994.994 0 0 1-.576.192c-.16 0-.3-.044-.42-.132a1.14 1.14 0 0 1-.276-.312l-.42-.756zm15.94 10.68c-.984 0-1.744-.276-2.28-.828-.528-.552-.792-1.34-.792-2.364V7.704h-1.416a.526.526 0 0 1-.348-.12c-.088-.088-.132-.216-.132-.384v-.948l1.98-.276.528-3.636a.55.55 0 0 1 .18-.312.543.543 0 0 1 .36-.12h1.188V6h3.456v1.704h-3.456v7.14c0 .48.116.84.348 1.08.24.232.544.348.912.348.216 0 .4-.028.552-.084.16-.056.296-.116.408-.18.112-.072.208-.136.288-.192a.39.39 0 0 1 .216-.084c.08 0 .14.02.18.06a.52.52 0 0 1 .144.168l.696 1.128c-.384.352-.84.624-1.368.816a4.774 4.774 0 0 1-1.644.288zM12.3 34.808 5.532 50.54a.987.987 0 0 1-.288.408c-.12.096-.296.144-.528.144h-1.74l2.232-4.86L.204 34.808h2.04c.2 0 .356.048.468.144a.836.836 0 0 1 .24.324l3.096 7.32c.064.184.124.372.18.564.064.184.116.368.156.552.056-.192.116-.38.18-.564.064-.192.132-.38.204-.564l2.988-7.308a.776.776 0 0 1 .264-.336.673.673 0 0 1 .408-.132H12.3zm6.634-.192c.896 0 1.704.148 2.424.444a4.907 4.907 0 0 1 1.848 1.26c.512.544.904 1.204 1.176 1.98.272.768.408 1.632.408 2.592 0 .96-.136 1.828-.408 2.604-.272.776-.664 1.436-1.176 1.98a5.098 5.098 0 0 1-1.848 1.26c-.72.288-1.528.432-2.424.432-.904 0-1.72-.144-2.448-.432a5.237 5.237 0 0 1-1.848-1.26c-.512-.544-.908-1.204-1.188-1.98-.272-.776-.408-1.644-.408-2.604 0-.96.136-1.824.408-2.592.28-.776.676-1.436 1.188-1.98a5.036 5.036 0 0 1 1.848-1.26c.728-.296 1.544-.444 2.448-.444zm0 10.728c1.152 0 2.012-.388 2.58-1.164.568-.776.852-1.868.852-3.276 0-1.408-.284-2.5-.852-3.276-.568-.784-1.428-1.176-2.58-1.176-1.168 0-2.04.392-2.616 1.176-.568.776-.852 1.868-.852 3.276 0 1.408.284 2.5.852 3.276.576.776 1.448 1.164 2.616 1.164zm18.608-10.536V47h-1.404c-.32 0-.528-.156-.624-.468l-.168-1.224c-.264.28-.54.536-.828.768a5.376 5.376 0 0 1-.924.6c-.328.16-.676.284-1.044.372a4.694 4.694 0 0 1-1.188.144c-.672 0-1.264-.112-1.776-.336a3.558 3.558 0 0 1-1.272-.936 4.143 4.143 0 0 1-.78-1.464 6.345 6.345 0 0 1-.264-1.884v-7.764h2.352v7.764c0 .872.2 1.552.6 2.04.4.48 1.012.72 1.836.72.6 0 1.16-.14 1.68-.42a5.844 5.844 0 0 0 1.464-1.176v-8.928h2.34zm5.474 2.34c.392-.8.864-1.428 1.416-1.884.552-.456 1.216-.684 1.992-.684.264 0 .512.032.744.096.24.056.448.144.624.264l-.156 1.764c-.056.216-.188.324-.396.324-.112 0-.28-.02-.504-.06a3.433 3.433 0 0 0-.72-.072c-.376 0-.708.056-.996.168a2.265 2.265 0 0 0-.78.48 3.196 3.196 0 0 0-.6.78c-.176.304-.34.652-.492 1.044V47h-2.34V34.808h1.344c.256 0 .428.048.516.144.096.088.164.248.204.48l.144 1.716zM55.956 47V36.728l-1.272-.156a1.19 1.19 0 0 1-.456-.192.508.508 0 0 1-.168-.408V35h1.896v-1.104c0-.696.1-1.316.3-1.86.2-.544.484-1.004.852-1.38a3.6 3.6 0 0 1 1.344-.864c.528-.2 1.12-.3 1.776-.3.552 0 1.06.08 1.524.24l-.048 1.176a.367.367 0 0 1-.096.24.55.55 0 0 1-.228.108c-.088.024-.2.04-.336.048h-.42c-.36 0-.688.044-.984.132a1.758 1.758 0 0 0-.756.444 2.041 2.041 0 0 0-.48.828c-.112.336-.168.756-.168 1.26V35h3.42v1.704h-3.348V47h-2.352zm14.138-5.412c-.952.032-1.76.108-2.424.228-.664.112-1.204.264-1.62.456-.416.192-.716.42-.9.684a1.445 1.445 0 0 0-.276.864 2 2 0 0 0 .144.792c.104.216.24.396.408.54.176.136.38.236.612.3.232.064.484.096.756.096a4.166 4.166 0 0 0 1.836-.408c.264-.136.516-.3.756-.492s.476-.412.708-.66v-2.4zm-6.864-5.076c.68-.648 1.416-1.132 2.208-1.452.8-.32 1.676-.48 2.628-.48.696 0 1.312.116 1.848.348.536.224.988.54 1.356.948.368.408.644.896.828 1.464.192.568.288 1.196.288 1.884V47h-1.044c-.232 0-.408-.036-.528-.108-.12-.08-.216-.224-.288-.432l-.252-1.068c-.312.288-.62.544-.924.768a6.42 6.42 0 0 1-.96.564c-.328.152-.68.268-1.056.348-.376.08-.792.12-1.248.12-.48 0-.932-.064-1.356-.192a3.113 3.113 0 0 1-1.092-.612 2.928 2.928 0 0 1-.744-1.02c-.176-.408-.264-.884-.264-1.428 0-.48.128-.94.384-1.38.264-.448.688-.848 1.272-1.2.592-.352 1.36-.64 2.304-.864.952-.224 2.12-.352 3.504-.384v-.888c0-.92-.196-1.608-.588-2.064-.392-.456-.968-.684-1.728-.684-.512 0-.944.064-1.296.192a4.964 4.964 0 0 0-.9.432c-.248.152-.468.292-.66.42a.994.994 0 0 1-.576.192c-.16 0-.3-.044-.42-.132a1.14 1.14 0 0 1-.276-.312l-.42-.756zm22.615-1.704L80.901 47H78.79l-4.944-12.192h1.932a.75.75 0 0 1 .456.132c.12.088.2.2.24.336l2.916 7.488c.104.312.192.624.264.936.08.304.152.608.216.912.064-.304.136-.608.216-.912.08-.304.176-.616.288-.936l2.952-7.488a.697.697 0 0 1 .684-.468h1.836zm6.706-.192c.896 0 1.704.148 2.424.444a4.907 4.907 0 0 1 1.848 1.26c.512.544.904 1.204 1.176 1.98.272.768.408 1.632.408 2.592 0 .96-.136 1.828-.408 2.604-.272.776-.664 1.436-1.176 1.98a5.098 5.098 0 0 1-1.848 1.26c-.72.288-1.528.432-2.424.432-.904 0-1.72-.144-2.448-.432a5.237 5.237 0 0 1-1.848-1.26c-.512-.544-.908-1.204-1.188-1.98-.272-.776-.408-1.644-.408-2.604 0-.96.136-1.824.408-2.592.28-.776.676-1.436 1.188-1.98a5.036 5.036 0 0 1 1.848-1.26c.728-.296 1.544-.444 2.448-.444zm0 10.728c1.152 0 2.012-.388 2.58-1.164.568-.776.852-1.868.852-3.276 0-1.408-.284-2.5-.852-3.276-.568-.784-1.428-1.176-2.58-1.176-1.168 0-2.04.392-2.616 1.176-.568.776-.852 1.868-.852 3.276 0 1.408.284 2.5.852 3.276.576.776 1.448 1.164 2.616 1.164zm10.676-8.196c.392-.8.864-1.428 1.416-1.884.552-.456 1.216-.684 1.992-.684.264 0 .512.032.744.096.24.056.448.144.624.264l-.156 1.764c-.056.216-.188.324-.396.324-.112 0-.28-.02-.504-.06a3.433 3.433 0 0 0-.72-.072c-.376 0-.708.056-.996.168a2.265 2.265 0 0 0-.78.48 3.196 3.196 0 0 0-.6.78c-.176.304-.34.652-.492 1.044V47h-2.34V34.808h1.344c.256 0 .428.048.516.144.096.088.164.248.204.48l.144 1.716zm9.029-2.34V47h-2.34V34.808h2.34zm.444-3.768c0 .216-.044.424-.132.624a1.765 1.765 0 0 1-.36.516c-.144.144-.316.26-.516.348a1.665 1.665 0 0 1-1.236 0 1.89 1.89 0 0 1-.516-.348 1.89 1.89 0 0 1-.348-.516c-.08-.2-.12-.408-.12-.624 0-.224.04-.432.12-.624.088-.2.204-.372.348-.516.152-.152.324-.268.516-.348.192-.088.396-.132.612-.132.216 0 .424.044.624.132.2.08.372.196.516.348.152.144.272.316.36.516.088.192.132.4.132.624zm6.76 16.152c-.984 0-1.744-.276-2.28-.828-.528-.552-.792-1.34-.792-2.364v-7.296h-1.416a.526.526 0 0 1-.348-.12c-.088-.088-.132-.216-.132-.384v-.948l1.98-.276.528-3.636a.55.55 0 0 1 .18-.312.543.543 0 0 1 .36-.12h1.188V35h3.456v1.704h-3.456v7.14c0 .48.116.84.348 1.08.24.232.544.348.912.348.216 0 .4-.028.552-.084.16-.056.296-.116.408-.18.112-.072.208-.136.288-.192a.39.39 0 0 1 .216-.084c.08 0 .14.02.18.06a.52.52 0 0 1 .144.168l.696 1.128c-.384.352-.84.624-1.368.816a4.774 4.774 0 0 1-1.644.288zm12.885-7.644c0-.464-.068-.892-.204-1.284a2.843 2.843 0 0 0-.576-1.02 2.646 2.646 0 0 0-.936-.672 3.165 3.165 0 0 0-1.272-.24c-.984 0-1.76.284-2.328.852-.56.568-.916 1.356-1.068 2.364h6.384zm1.932 5.712c-.288.336-.62.628-.996.876-.376.24-.776.436-1.2.588a7.256 7.256 0 0 1-1.32.336 8.383 8.383 0 0 1-1.332.108 6.4 6.4 0 0 1-2.34-.42 5.366 5.366 0 0 1-1.86-1.248c-.52-.552-.928-1.232-1.224-2.04-.288-.816-.432-1.752-.432-2.808 0-.848.132-1.636.396-2.364a5.745 5.745 0 0 1 1.128-1.92 5.29 5.29 0 0 1 1.812-1.284c.712-.312 1.512-.468 2.4-.468.744 0 1.428.124 2.052.372.632.24 1.176.592 1.632 1.056.456.464.812 1.036 1.068 1.716.264.68.396 1.456.396 2.328 0 .36-.04.604-.12.732-.08.12-.228.18-.444.18h-7.992c.024.728.128 1.364.312 1.908.184.536.436.984.756 1.344.328.36.716.628 1.164.804.448.176.948.264 1.5.264.52 0 .968-.06 1.344-.18.384-.12.712-.248.984-.384.28-.144.512-.276.696-.396.192-.12.36-.18.504-.18.192 0 .34.072.444.216l.672.864zm9.569 1.74V36.728l-1.272-.156a1.19 1.19 0 0 1-.456-.192.508.508 0 0 1-.168-.408V35h1.896v-1.104c0-.696.1-1.316.3-1.86.2-.544.484-1.004.852-1.38a3.6 3.6 0 0 1 1.344-.864c.528-.2 1.12-.3 1.776-.3.552 0 1.06.08 1.524.24l-.048 1.176a.367.367 0 0 1-.096.24.55.55 0 0 1-.228.108c-.088.024-.2.04-.336.048h-.42c-.36 0-.688.044-.984.132a1.758 1.758 0 0 0-.756.444 2.041 2.041 0 0 0-.48.828c-.112.336-.168.756-.168 1.26V35h3.42v1.704h-3.348V47h-2.352zm12.478-12.384c.896 0 1.704.148 2.424.444a4.907 4.907 0 0 1 1.848 1.26c.512.544.904 1.204 1.176 1.98.272.768.408 1.632.408 2.592 0 .96-.136 1.828-.408 2.604-.272.776-.664 1.436-1.176 1.98a5.098 5.098 0 0 1-1.848 1.26c-.72.288-1.528.432-2.424.432-.904 0-1.72-.144-2.448-.432a5.237 5.237 0 0 1-1.848-1.26c-.512-.544-.908-1.204-1.188-1.98-.272-.776-.408-1.644-.408-2.604 0-.96.136-1.824.408-2.592.28-.776.676-1.436 1.188-1.98a5.036 5.036 0 0 1 1.848-1.26c.728-.296 1.544-.444 2.448-.444zm0 10.728c1.152 0 2.012-.388 2.58-1.164.568-.776.852-1.868.852-3.276 0-1.408-.284-2.5-.852-3.276-.568-.784-1.428-1.176-2.58-1.176-1.168 0-2.04.392-2.616 1.176-.568.776-.852 1.868-.852 3.276 0 1.408.284 2.5.852 3.276.576.776 1.448 1.164 2.616 1.164zm13.664-10.728c.896 0 1.704.148 2.424.444a4.907 4.907 0 0 1 1.848 1.26c.512.544.904 1.204 1.176 1.98.272.768.408 1.632.408 2.592 0 .96-.136 1.828-.408 2.604-.272.776-.664 1.436-1.176 1.98a5.098 5.098 0 0 1-1.848 1.26c-.72.288-1.528.432-2.424.432-.904 0-1.72-.144-2.448-.432a5.237 5.237 0 0 1-1.848-1.26c-.512-.544-.908-1.204-1.188-1.98-.272-.776-.408-1.644-.408-2.604 0-.96.136-1.824.408-2.592.28-.776.676-1.436 1.188-1.98a5.036 5.036 0 0 1 1.848-1.26c.728-.296 1.544-.444 2.448-.444zm0 10.728c1.152 0 2.012-.388 2.58-1.164.568-.776.852-1.868.852-3.276 0-1.408-.284-2.5-.852-3.276-.568-.784-1.428-1.176-2.58-1.176-1.168 0-2.04.392-2.616 1.176-.568.776-.852 1.868-.852 3.276 0 1.408.284 2.5.852 3.276.576.776 1.448 1.164 2.616 1.164zm16.329-7.584c-.384-.504-.8-.856-1.248-1.056-.44-.2-.936-.3-1.488-.3-1.072 0-1.904.388-2.496 1.164-.584.768-.876 1.892-.876 3.372 0 .776.064 1.44.192 1.992.136.544.328.992.576 1.344.256.344.568.6.936.768a3.1 3.1 0 0 0 1.248.24c.68 0 1.268-.152 1.764-.456.496-.304.96-.732 1.392-1.284V37.76zm2.352-8.472V47h-1.416c-.328 0-.532-.156-.612-.468l-.204-1.404a6.524 6.524 0 0 1-1.776 1.488c-.656.368-1.416.552-2.28.552a4.333 4.333 0 0 1-1.896-.408 4.017 4.017 0 0 1-1.44-1.188c-.4-.528-.708-1.18-.924-1.956-.216-.776-.324-1.668-.324-2.676 0-.904.12-1.744.36-2.52a6.026 6.026 0 0 1 1.044-2.016 4.86 4.86 0 0 1 1.656-1.332c.648-.328 1.38-.492 2.196-.492.736 0 1.36.12 1.872.36.52.24.984.58 1.392 1.02v-6.672h2.352zM200.343 44c.384.504.796.856 1.236 1.056.448.2.948.3 1.5.3 1.072 0 1.9-.384 2.484-1.152.592-.776.888-1.904.888-3.384 0-.776-.068-1.436-.204-1.98-.128-.552-.32-1-.576-1.344a2.186 2.186 0 0 0-.924-.768 2.973 2.973 0 0 0-1.248-.252c-.68 0-1.272.152-1.776.456-.496.304-.956.736-1.38 1.296V44zm-.12-7.368c.256-.304.528-.58.816-.828.296-.256.612-.472.948-.648a4.566 4.566 0 0 1 1.068-.42 4.664 4.664 0 0 1 1.224-.156c.696 0 1.324.136 1.884.408a3.943 3.943 0 0 1 1.452 1.2c.4.528.708 1.18.924 1.956.224.776.336 1.668.336 2.676 0 .904-.124 1.744-.372 2.52a6.043 6.043 0 0 1-1.044 2.004c-.448.568-1 1.016-1.656 1.344-.648.32-1.38.48-2.196.48-.728 0-1.352-.12-1.872-.36a4.492 4.492 0 0 1-1.392-1.008v5.292h-2.34V34.808h1.404c.328 0 .532.156.612.468l.204 1.356zm13.68-7.344V47h-2.352V29.288h2.352zm9.895 12.3c-.952.032-1.76.108-2.424.228-.664.112-1.204.264-1.62.456-.416.192-.716.42-.9.684a1.445 1.445 0 0 0-.276.864 2 2 0 0 0 .144.792c.104.216.24.396.408.54.176.136.38.236.612.3.232.064.484.096.756.096a4.166 4.166 0 0 0 1.836-.408c.264-.136.516-.3.756-.492s.476-.412.708-.66v-2.4zm-6.864-5.076c.68-.648 1.416-1.132 2.208-1.452.8-.32 1.676-.48 2.628-.48.696 0 1.312.116 1.848.348.536.224.988.54 1.356.948.368.408.644.896.828 1.464.192.568.288 1.196.288 1.884V47h-1.044c-.232 0-.408-.036-.528-.108-.12-.08-.216-.224-.288-.432l-.252-1.068c-.312.288-.62.544-.924.768a6.42 6.42 0 0 1-.96.564c-.328.152-.68.268-1.056.348-.376.08-.792.12-1.248.12-.48 0-.932-.064-1.356-.192a3.113 3.113 0 0 1-1.092-.612 2.928 2.928 0 0 1-.744-1.02c-.176-.408-.264-.884-.264-1.428 0-.48.128-.94.384-1.38.264-.448.688-.848 1.272-1.2.592-.352 1.36-.64 2.304-.864.952-.224 2.12-.352 3.504-.384v-.888c0-.92-.196-1.608-.588-2.064-.392-.456-.968-.684-1.728-.684-.512 0-.944.064-1.296.192a4.964 4.964 0 0 0-.9.432c-.248.152-.468.292-.66.42a.994.994 0 0 1-.576.192c-.16 0-.3-.044-.42-.132a1.14 1.14 0 0 1-.276-.312l-.42-.756zm20.832.576c-.072.088-.144.16-.216.216-.064.048-.16.072-.288.072a.744.744 0 0 1-.408-.144 3.631 3.631 0 0 0-.528-.324 3.889 3.889 0 0 0-.768-.324c-.296-.104-.664-.156-1.104-.156-.576 0-1.084.104-1.524.312-.44.208-.808.504-1.104.888-.288.384-.508.852-.66 1.404a7.008 7.008 0 0 0-.228 1.86c0 .712.08 1.348.24 1.908.16.552.388 1.02.684 1.404.296.376.656.664 1.08.864.424.192.896.288 1.416.288.504 0 .92-.06 1.248-.18.328-.128.6-.264.816-.408.216-.144.396-.276.54-.396.144-.128.292-.192.444-.192.192 0 .34.072.444.216l.672.864c-.28.344-.596.636-.948.876-.344.24-.712.436-1.104.588a6.252 6.252 0 0 1-1.236.336 7.728 7.728 0 0 1-1.296.108 5.44 5.44 0 0 1-2.136-.42 4.897 4.897 0 0 1-1.716-1.224c-.48-.536-.86-1.192-1.14-1.968-.28-.784-.42-1.672-.42-2.664 0-.904.124-1.74.372-2.508a5.642 5.642 0 0 1 1.116-1.98 5.118 5.118 0 0 1 1.824-1.308c.72-.32 1.544-.48 2.472-.48.872 0 1.64.14 2.304.42.664.28 1.256.676 1.776 1.188l-.624.864zm10.806 2.46c0-.464-.068-.892-.204-1.284a2.843 2.843 0 0 0-.576-1.02 2.646 2.646 0 0 0-.936-.672 3.165 3.165 0 0 0-1.272-.24c-.984 0-1.76.284-2.328.852-.56.568-.916 1.356-1.068 2.364h6.384zm1.932 5.712c-.288.336-.62.628-.996.876-.376.24-.776.436-1.2.588a7.256 7.256 0 0 1-1.32.336 8.383 8.383 0 0 1-1.332.108 6.4 6.4 0 0 1-2.34-.42 5.366 5.366 0 0 1-1.86-1.248c-.52-.552-.928-1.232-1.224-2.04-.288-.816-.432-1.752-.432-2.808 0-.848.132-1.636.396-2.364a5.745 5.745 0 0 1 1.128-1.92 5.29 5.29 0 0 1 1.812-1.284c.712-.312 1.512-.468 2.4-.468.744 0 1.428.124 2.052.372.632.24 1.176.592 1.632 1.056.456.464.812 1.036 1.068 1.716.264.68.396 1.456.396 2.328 0 .36-.04.604-.12.732-.08.12-.228.18-.444.18h-7.992c.024.728.128 1.364.312 1.908.184.536.436.984.756 1.344.328.36.716.628 1.164.804.448.176.948.264 1.5.264.52 0 .968-.06 1.344-.18.384-.12.712-.248.984-.384.28-.144.512-.276.696-.396.192-.12.36-.18.504-.18.192 0 .34.072.444.216l.672.864z"
      />
    </Svg>
  )
  return (
    <View style={styles.container}>

      <View style={styles.edinLogo}>
        <FullEdinLogo />
      </View>

      <Image source={require('../../assets/ChoiceImage.png')} style={styles.choiceImage} />
      <View style={styles.choiceContainer}>
        <View style={styles.titleContainer}>
          {welcomeSVG}
        </View>

        <View style={styles.LogInButtonContainer}>
          <TouchableOpacity style={styles.LogInButton}
            onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.LogInButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpButtonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Choice;