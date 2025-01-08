import NewTypeBox from "./NewTypeBox";
import TypeBox from "./typeBox";

function TypesRender(){
    return(
        <div className="flex flex-col items-center overflow-x-auto w-full mt-2">
            <div className="flex items-center justify-evenly">
                <TypeBox name={"Short"}/>
                <TypeBox name={"Calça"}/>
                <NewTypeBox />
            </div>
        </div>
    )
}

export default TypesRender;