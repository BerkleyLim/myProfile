  // css 강제 사용
  // 노션에서 주로 사용하는 css 색상으로 최대한 커스텀 마이징 시키기
  export const tagCss = (colorCode, colorSelector) => {
    // console.log(colorCode)
    switch(colorCode) {
      case 'pink':
        if (colorSelector === 'font') {
          return "rgb(76, 35, 55)"
        } else {
          return "rgb(245, 224, 233)"
        }
      case 'blue':
        if (colorSelector === 'font') {
          return "rgb(24, 51, 71)"
        } else {
          return "rgb(211, 229, 239)"
        }
      case 'green':
        if (colorSelector === 'font') {
          return "rgb(76, 35, 55)"
        } else {
          return "rgb(219, 237, 219)"
        }
      case 'purple':
        if (colorSelector === 'font') {
          return "rgb(28, 56, 41)"
        } else {
          return "rgb(232, 222, 238)"
        }
      case 'brown':
        if (colorSelector === 'font') {
          return "rgb(68, 42, 30)"
        } else {
          return "rgb(238, 224, 218)"
        }
      case 'orange':
        if (colorSelector === 'font') {
          return "rgb(73, 41, 14)"
        } else {
          return "rgb(250, 222, 201)"
        }
      default:
        if (colorSelector === 'font') {
          return "rgb(50,48,44)"
        } else {
          return "rgb(227,226,224, 0.5)";
        }
    }
  }