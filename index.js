function Notification(props) {
   { text, color, imgsrc } = props;
   return (
       <div class="bg2" style=`background-color:{color};`>
           <img src=`{imgsrc}`/><p>{text}</p>
       </div>
   )
}

const element = (
    <div class="bg">
        <h1>Notifications</h1>
        <div>
            <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" text="Information Messages" color="blue"/>
            <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" text="Success Messages" color="green"/>
            <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" text="Warning Messages" color="yellow"/>
            <Notification imgsrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" text="Error Messages" color="red"/>
        </div>
    </div>

    </div>
)

ReactDOM.render(element, document.getElementById('root'))
