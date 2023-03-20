import moment from 'moment'

export const dateYMD = opt => {
  if (String(opt).length === 10) opt = opt * 1000
  return moment(opt).format('YYYY-MM-DD HH:mm:ss')
}

//   const onBeforeUpload = async (file) => {
//     const { type, size } = file
//     // if (type !== 'image/png') {
//     //     console.log('图片格式不对');
//     //     return false
//     // }
//     // 限制只能上传一张
//     if (fileList.length > 0) {
//         console.log('只能上传一张');
//         return false
//     }

//     let formData = new FormData();
//     formData.append('file', file);
//     await  dispatch({
//         type: 'upimage/fetchUpload',
//         payload: formData,
//     })
//       
//      setFileList([{
//            uid: '-1',
//            name: 'image.png',
//            status: 'done',
//            url: res,
//      }])
//        
//     return false
// }
