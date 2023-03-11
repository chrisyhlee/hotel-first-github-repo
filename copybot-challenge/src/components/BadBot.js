

const BadBot = (props) => {
    // console.log(props.name);

    // let badBotArr = (props.name).split("")
    // console.log(badBotArr);
    // let badBotSays = badBotArr.map(value => 'z')
    // console.log(badBotSays);
    // let finalSaying = badBotSays.join("")
    const blaBla = (str) => {
        let typedStr = ""
        for (let i=0; i < str.length; i++) {
          if (i === 0) {
            typedStr = typedStr + "B"
          } else if (typedStr.charAt([i-1]).toLowerCase() === 'b') {
            typedStr = typedStr + "l"
          } else if (i === 2) {
            typedStr = typedStr + 'a'
          } else if (typedStr.charAt([i-1]) === 'a') {
            typedStr = typedStr + 'b'
          } else if (typedStr.charAt([i-1]) === 'b') {
            typedStr = typedStr + 'l'
          } else if (typedStr.charAt([i-1] === 'l')) {
            typedStr = typedStr + 'a'
          }
        console.log(str.indexOf('d'));
        return typedStr
      }
    }
    
    return(
        <>
        {props.name && <p>You are saying, '{blaBla(props.name)}', right?</p>}
        </>
    )
}


export default BadBot