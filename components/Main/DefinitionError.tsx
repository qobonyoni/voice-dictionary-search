

type ErrorProps = {
    message: string;
    title: string;
};



export default function DefinitionError({title,message}:ErrorProps) {
    return (
        <div className="flex self-center flex-col items-center justify-center  gap-2 justify-self-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center" >
            <h1 style={{fontFamily:"Bellefair"}} className="text-3xl font-bellefair">
                
            {title||"No results"}
            </h1>
            <p>
                
            {message ||"Check Internet Connection or Try again later"}
            </p>
            
            
        </div>
    )
}
