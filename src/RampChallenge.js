import { useEffect, useState } from "react";

function RampChallenge() {

    const [flag, setFlag] = useState()
    const [flagDisplay, setDisplay] = useState()
    const [flagList, setFlagList] = useState()

    const fetchFlag = async () => {
        try {
            const response = await fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636170")

            if(!response.ok) {
                throw new Error('Network Response was not ok')
            }

            const htmlString = await response.text()
            const parser = new DOMParser()
            const doc = parser.parseFromString(htmlString, 'text/html')

            setTimeout(() => {
                setFlag(doc.body.textContent)
            
            }, 500)
        } 
        catch(error) {
            console.error('Could not fetch html', error)
        }
    }

    useEffect(() => {
        fetchFlag()
    }, [])

    useEffect(() => {
        if(flag){
            setDisplay('')
            displayFlag()
        }
    },[flag])

    const delayDisplay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const displayFlag = async () => {
        if(!flag) return

        const splitFlag = flag.split('')
        let timedFlagDisplay = ''
        setDisplay(' ')
        await delayDisplay(500)

        timedFlagDisplay += splitFlag[0]
        setDisplay(timedFlagDisplay)
        await delayDisplay(500)
        

        for(let i=1; i < splitFlag.length; i++) {
            timedFlagDisplay += splitFlag[i]
            setDisplay(timedFlagDisplay)
            await delayDisplay(500)
        }

        setFlagList(splitFlag)
    }

    return(
        <>
            {!flagDisplay ? "Loading..." : flagDisplay}
            <br/>
            {!flagList ? '': <p>[{flagList.join(',')}]</p>}
        </>
    )
}

export default RampChallenge;