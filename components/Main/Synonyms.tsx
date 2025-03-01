
type SynonymProps = {
  synonyms: string[];
}


  const Synonyms = ({ synonyms }:SynonymProps) => {
    return (
      <div>
        <h3 className="absolute top-0 translate-y-[-50%] bg-main px-1 text-xl tracking-wide">Synonyms</h3>
        <p className="flex gap-0">{synonyms.map(s => <span key={s}>{s}</span>) }</p>
       
      </div>
    );
};
export default Synonyms;
  

  