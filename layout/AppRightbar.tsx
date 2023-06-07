
const ApRightebar = (props) => {
    const {menu, pageUrl} = props
    console.log('==============right')
    // console.log(menu);
    console.log(pageUrl);
    if(!menu){
        return <></>
    }
    // const model  = menu;
    return (
        <div>
          <p>On this page</p>
          <div className="markdown-body">
                {menu.map(heading => {
                  return (
                    <div key={`#${heading.slug}`} data-level={heading.level}>
                      <a data-level={heading.level} href={`${pageUrl}#${heading.slug}` }>
                        {heading.text}
                      </a>
                    </div>
                  )
                })}
          </div>
        </div>
    )
};

export default ApRightebar;
