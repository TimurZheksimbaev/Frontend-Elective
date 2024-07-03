import "../styles/TechStack.css"
import {pulse} from "react-animations"
import {flip} from "react-animations"
import {bounce} from "react-animations"
import {hinge} from "react-animations"
import {swing} from "react-animations"
import {tada} from "react-animations"

import styled, { keyframes } from 'styled-components'

function TechStack() {
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
    const Flip = styled.div`animation: 2s ${keyframes`${flip}`} infinite `
    const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite `
    const Hinge = styled.div`animation: 3s ${keyframes`${hinge}`} infinite `
    const Swing = styled.div`animation: 4s ${keyframes`${swing}`} infinite `
    const Tada = styled.div`animation: 2s ${keyframes`${tada}`} infinite `



    return (
        <div className="tech-stack-container">
             <h1 className="tech-stack-title">Technological stack</h1> 

            <div className="logos">
                <Bounce><img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /></Bounce>
                <img className="rotate" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" />
                <img className="scale" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" />
                <Swing><img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" /></Swing>
                <img className="rotate" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img className="scale" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
                <Pulse><img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" /></Pulse>
                <img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                <Tada><img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /></Tada>
                <img className="rotate" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                <Flip><img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" /></Flip>
                <Hinge><img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" /></Hinge>
                <img height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" />
                <img className="move" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                <img className="scale" height={50} width={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
            </div>
        </div>
    )
}

export default  TechStack