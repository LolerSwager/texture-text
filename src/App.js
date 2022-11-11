import myImage from "./Assets/images/ballon.jpg"
import "./Assets/css/App.css"
import { useState } from "react"
import styled from "styled-components"

const DemoText = styled.h1`
    font-size: ${(props) => props.fontSize};
    background-size: ${(props) => props.textureSize};
    background-image: url(${myImage});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

function App() {
    // text
    const [text, setText] = useState("som text")

    const updateText = (event) => {
        setText(event.target.value)
    }

    // text size
    const [fontSize, setFontSize] = useState("8em")

    const updateFontSize = (event) => {
        setFontSize(event.target.value)
    }

    // texture size
    const [textureSize, setTextureSize] = useState("1em")

    const updateTextureSize = (event) => {
        setTextureSize(event.target.value)
    }

    return (
        <main>
            <div className="wrapper">
                <div className="fontStyle-pre">
                    <DemoText fontSize={fontSize} textureSize={textureSize}>
                        {text}
                    </DemoText>
                </div>
                <form>
                    <h2 id="pre" className="fontStyle-1">
                        Font Texture
                    </h2>
                    <input type="text" value={text} onChange={updateText} />
                    <input
                        type="text"
                        value={fontSize}
                        onChange={updateFontSize}
                    />
                    <input type="text" placeholder="Background texture" />
                    <input
                        type="text"
                        value={textureSize}
                        onChange={updateTextureSize}
                    />
                    <button>Create css</button>
                    <div>
                        <h3>Share on</h3>
                        <div>
                            <p>
                                <i className="fa-brands fa-facebook"></i>{" "}
                                Facebook
                            </p>
                            <p>
                                <i className="fa-brands fa-twitter"></i> twitter
                            </p>
                            <p>
                                <i className="fa-brands fa-discord"></i> discord
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default App
