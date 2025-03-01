const Source = ({ url }:{url:string}) => {
    return (
      <div>
        <h3>Source</h3>
        <a className="text-link underline" href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    );
};
  
export default Source;