import "./Assets/css/App.css"
import { useState } from "react"
import styled from "styled-components"

const DemoText = styled.h1`
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize}px;
    background-size: ${(props) => props.textureSize}px;
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

    // text family
    const [fontFamily, setFontFamily] = useState("Poppins")

    const updateFontFamily = (event) => {
        setFontFamily(event.target.value)
    }

    // text size
    const [fontSize, setFontSize] = useState("100")

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
    const [textureSize, setTextureSize] = useState("150")

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
        <>
            <main>
                <div className="wrapper">
                    <div className="fontStyle-pre">
                        <DemoText
                            fontSize={fontSize}
                            textureSize={textureSize}
                            background={background}
                            fontFamily={fontFamily}
                        >
                            {text}
                        </DemoText>
                        {/* <pre>
                            <code>
                                font-family: {fontFamily};
                                font-size: {fontSize}px;
                                background-size: {textureSize}px;
                                background-image: url({background});
                                background-clip: text;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            </code>
                        </pre> */}
                    </div>
                    <form>
                        <h2 id="pre" className="fontStyle-1">
                            Font Texture
                        </h2>
                        <label>
                            The text you want
                            <input
                                type="text"
                                value={text}
                                onChange={updateText}
                            />
                        </label>
                        <label>
                            Font family:
                            <input
                                name="fontFamily"
                                list="fontFamily"
                                type="text"
                                value={fontFamily}
                                onChange={updateFontFamily}
                            />
                        </label>
                        <datalist id="fontFamily">
                            <option value="arial"></option>
                            <option value="Poppins"></option>
                            <option value="Impact"></option>
                        </datalist>
                        <label>
                            Font size:
                            <input
                                type="text"
                                value={fontSize}
                                onChange={updateFontSize}
                            />
                            <input
                                type="range"
                                value={fontSize}
                                onChange={updateFontSize}
                                max="300"
                            ></input>
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
                            <input
                                type="range"
                                value={textureSize}
                                onChange={updateTextureSize}
                                max="1000"
                            ></input>
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
                        <div className="links">
                            <div>
                                <h3>Share on</h3>

                                <a href="#">
                                    <p>
                                        <i className="fa-brands fa-facebook"></i>
                                        Facebook
                                    </p>
                                </a>
                                <a href="#">
                                    <p>
                                        <i className="fa-brands fa-twitter"></i>
                                        Twitter
                                    </p>
                                </a>
                                <a href="#">
                                    <p>
                                        <i className="fa-brands fa-discord"></i>
                                        Discord
                                    </p>
                                </a>
                            </div>
                            <div>
                                <h3>Our link:</h3>
                                <a
                                    href="https://lolerswager.com"
                                    target="_blank"
                                >
                                    <p>
                                        <i class="fa-solid fa-square-up-right"></i>
                                        Lolerswager
                                    </p>
                                </a>
                                <a
                                    href="https://discord.com/invite/uaCRvZU"
                                    target="_blank"
                                >
                                    <p>
                                        <i className="fa-brands fa-discord"></i>
                                        Discord
                                    </p>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <p>
                    <b>_</b> Made By:{" "}
                    <a href="https://lolerswager.com">Jannick Vanderhoef</a>
                </p>
            </footer>
        </>
    )
}

export default App
