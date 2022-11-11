import "./Assets/css/App.css"
import { useState } from "react"
import styled from "styled-components"

const DemoText = styled.h1`
    font-size: ${(props) => props.fontSize};
    background-size: ${(props) => props.textureSize};
    background-image: url(${(props) => props.background});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

function App() {
    // text
    const [text, setText] = useState("Some text")

    const updateText = (event) => {
        setText(event.target.value)
    }

    // text size
    const [fontSize, setFontSize] = useState("8em")

    const updateFontSize = (event) => {
        setFontSize(event.target.value)
    }

    // background image
    const [background, setBackgrounde] = useState(
        "https://raw.githubusercontent.com/LolerSwager/texture-text/main/src/Assets/images/ballon.jpg"
    )

    const updateBackground = (event) => {
        setBackgrounde(event.target.value)
    }

    // texture size
    const [textureSize, setTextureSize] = useState("1em")

    const updateTextureSize = (event) => {
        setTextureSize(event.target.value)
    }

    /*  // texture size type
    const [textureSizeType, setTextureSizeType] = useState("em")

    const updateTextureSizeType = (event) => {
        setTextureSize(event.target.value)
    } */
    // create css button

    return (
        <main>
            <div className="wrapper">
                <div className="fontStyle-pre">
                    <DemoText
                        fontSize={fontSize}
                        textureSize={textureSize}
                        background={background}
                    >
                        {text}
                    </DemoText>
                </div>
                <form>
                    <h2 id="pre" className="fontStyle-1">
                        Font Texture
                    </h2>
                    <label>
                        The text you want
                        <input type="text" value={text} onChange={updateText} />
                    </label>
                    <label>
                        Font size:
                        <input
                            type="text"
                            value={fontSize}
                            onChange={updateFontSize}
                        />
                    </label>
                    <label>
                        Background image url:
                        <input
                            type="text"
                            placeholder="Background texture .fx a url"
                            value={background}
                            onChange={updateBackground}
                        />
                    </label>
                    <label>
                        Background image size:
                        <input
                            type="text"
                            value={textureSize}
                            onChange={updateTextureSize}
                        />
                    </label>
                    {/* <input
                        type="text"
                        value={textureSizeType}
                        onChange={updateTextureSizeType}
                    /> */}
                    <button disabled title="inputs not complete">
                        Create css
                    </button>
                    <label>
                        image preview:
                        <img src={background} />
                    </label>
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
