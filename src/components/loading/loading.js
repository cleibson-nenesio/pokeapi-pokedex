import styled from "styled-components"

export const Loading = () => {
    return(
        <DotsLoading id='new-cards'>
            <div></div>
            <div></div>
            <div></div>
        </DotsLoading>
    )
}

const DotsLoading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

    > div {
        width: 16px;
        height: 16px;
        margin: 3px 6px;
        border-radius: 50%;
        background-color: #333;
        opacity: 1;
        animation: bouncing-loader 0.6s infinite alternate;
    }

    @keyframes bouncing-loader {
        to {
          opacity: 0.1;
          transform: translateY(-16px);
        }
    }
      
    > div:nth-child(2) {
        animation-delay: 0.2s;
    }
      
    > div:nth-child(3) {
        animation-delay: 0.4s;
    }
`