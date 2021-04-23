import React from 'react';

const PrintButton = () => {
    function printDiv() {
        let divContents = document.getElementById('CV').innerHTML;
        let a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        a.document.write('<body>');
        a.document.write(divContents);
        a.document.write('</body>');
        a.document.write('<style> button { display: none; } </style>');
        //a.document.write('<style> background: white; width: 800px; width: 50%; margin: 0 auto; margin-top: 30px; margin-bottom: 30px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; #CV p { font-size: small; } #CV li { font-size: small; } #CV .experience-info { margin: 6px; } #CV .education-info { margin: 6px; } #CV .skill-info { margin: 6px; } #CV #skills-title { margin-bottom: 8px; } </style>');
        //above is a bit of a semi failed experiment to hardcode the main CV style into the printout...
        a.document.write('</html>');
        a.document.close();
        a.print();
    };

    return ( 
        <div>
            <button type="button" onClick={printDiv} className="bottomSpace">Print Resume Contents</button>
        </div>
     );
}
 
export default PrintButton;