export default function Li(props){
    const {Href, AClass, LiClass, text, children, texto } = props; // destructuring


    const displayText = children === undefined ? text : children;
    return(

    <li className={LiClass}><a className={AClass} href={Href}>{texto}</a>{displayText}</li>

    )
}