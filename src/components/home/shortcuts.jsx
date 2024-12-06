import ShortcutBox from "./shortcutBox";

function Shortcuts(){
    return(
        <div className="flex flex-wrap items-center justify-evenly w-full">
            <ShortcutBox name={"Short"} />
            <ShortcutBox name={"Blusa"} />
            <ShortcutBox name={"Jeans"} />
        </div>
    )
}

export default Shortcuts;