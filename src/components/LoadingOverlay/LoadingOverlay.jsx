import { LoadingOverlay } from "@mantine/core"


export const PageLoading=(props)=>{
    const {visible}=props
    return(<>
        <LoadingOverlay
            visible={visible}
            zIndex={1000}
            w='100%'
            h='100vw'
            
            transitionProps={{
                transition:"fade",
                duration:200,
            }}
            overlayProps={{ radius: 'lg', blur: 1.5 }}
            loaderProps={{ color: 'purple', type: 'bars' }}
            styles={{
                loader:{position:"fixed",top:'50%',left:"50%"},
                overlay:{position:"relative",width:"100%",height:"100%"}
            }}
        />
        </>)
}