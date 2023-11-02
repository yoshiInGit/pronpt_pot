import styled from "styled-components"
import Mode from "../../../domain/mode"
import Icon from "../basic/Icon"

const SelectorWrapper = styled.div`
    z-index          : 100;
    position         : fixed;
    top              : 56px;
    width            : 100%;
    height           : 56px;
    background-color : white;
    filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    display          : flex;

`

const SelectorBtn = styled.div<{isActive : boolean}>`
    flex-grow       : 1;
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
    ${(props) => props.isActive && `color: #A7005A;`};
    cursor: pointer;
`

const SelectorItemName = styled.span`
    font-family : 'Roboto', sans-serif;
    font-weight : bolder;
    font-size   : 12px;
`

const SelectorPad = styled.div<{width : number}>`
    flex-grow: 1;
    max-width: 0px;

    @media (min-width: 768px) {
        max-width: 120px;
    }

    @media (min-width: 1024px) {
        max-width: 400px;
    }
`

const ModeSelector = ({onSelect, mode} : {onSelect : (value : Mode)=>void, mode : Mode})=> {
    return(
        <SelectorWrapper>
            <SelectorPad width={160}/>

            <SelectorBtn 
                isActive={mode == Mode.Hot}
                onClick={()=>onSelect(Mode.Hot)}>
                <Icon name="local_fire_department"/>
                <SelectorItemName>Hot</SelectorItemName>
            </SelectorBtn>

            <SelectorBtn 
               isActive={mode == Mode.New}
               onClick={()=>onSelect(Mode.New)}>
               <Icon name="lightbulb_outline"/>
               <SelectorItemName>New</SelectorItemName>
            </SelectorBtn>

            <SelectorBtn 
               isActive={mode == Mode.Random}
               onClick={()=>onSelect(Mode.Random)}>
               <Icon name="shuffle"/>
               <SelectorItemName>Random</SelectorItemName>
            </SelectorBtn> 

            <SelectorPad width={160}/>
        </SelectorWrapper>
    );
}

export default ModeSelector;