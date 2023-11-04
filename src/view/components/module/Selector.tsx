import styled from "styled-components"
import SpaceBox from "../layout/SpaceBox"
import Icon from "../basic/Icon"

const SelectBox = styled.div`
    width         : 30%;
    border        : 1px solid black;
    border-radius : 3px;
    display       : flex;
    cursor        : pointer;
`
const SelectBoxValue = styled.div`
    flex-grow       : 1;
    display         : flex;
    justify-content : start;
    align-items     : center;
`

const Selector = ({value, onClick} : {value : string, onClick : ()=>void}) => {
    
    return(
        <>
            <SelectBox onClick={onClick}>
                <SpaceBox width={8}/>
                <SelectBoxValue>{value}</SelectBoxValue>
                <Icon name="expand_more"/>
            </SelectBox>
        </>
    )
}

export default Selector;