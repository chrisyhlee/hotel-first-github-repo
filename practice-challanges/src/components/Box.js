import React, {useState} from 'react'

const ColorBox = () => {
    const [boxName, setBoxName] = useState('white')

    const randomColor = () => {
        let colorIndex = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
        let colorName = Math.floor(Math.random() * colorIndex.length)
        setBoxName(colorIndex[colorName])
    }

    return (
        <>
            <button onClick={randomColor} style={{height: '200px', width: '200px', backgroundColor:boxName}}>{boxName}</button>
        </>
    )
}

export default ColorBox