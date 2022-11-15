function Resume() {
    return(
        <div className="resume-section">
                    <h2>
                        {}
                        <a
                            href='https://rxresu.me/moyuh/2022webdevelopment'
                            target={"_blank"}
                            download='https://rxresu.me/moyuh/2022webdevelopment'
                            className='slide res-size'
                            style={{ color: "white", textDecoration: "underline"}}
        >
          Downloadable Resume
        </a>
      </h2>
      <div>
        <p className="resume-instructions">
            Click on the link above to download my resume!
        </p>
      </div>
        </div>
    )
}
export default Resume;