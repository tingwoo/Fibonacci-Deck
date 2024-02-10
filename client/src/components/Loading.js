import './Loading.css'

function Loading(props) {
    
    return (
        <div className='loading' style={{opacity:(props.isLoading ? "1" : "0"), transition:"0.5s"}}>
            <div className='loading-text zh-regular'>讀取中</div>
        </div>
    );
}
  
export default Loading;