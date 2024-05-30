// // emailTemplate.js
const getJobTemplate = (data) => {
  return `
    <table  style="display:block; background:#f8f8fa  url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left; width:800px !important; color: #444444;  box-shadow: 0px 0 6px #ccc;" cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
        
            <tr style="width: 100%; border-collapse: collapse">
                <td width="800px" style="width: 100%; display: grid; border-collapse: collapse">
                    <tr style="width: 800px; background-color: white; height: 100px; border-bottom: 3px solid #006cb5">
                        <td style="width: 800px; text-align: center; vertical-align: middle">
                            <span>
                                <b style="margin-bottom: 0px; color: #006cb5; font-size: 28px; font-weight: bold">UNIVERSITY OF KALYANI</b>
                                <br />
                                (Department of Engineering and Technological Studies(DETS))<br/>
                                (Kalyani, West Bengal,741235)
                            </span>
                        </td>
                    </tr>
                </td>
            </tr>
          <tr style="display: block; padding: 20px; margin-top: -15px;">
              <td style="font-family:calibri,helvetica,arial,sans-serif; ">
                <table style="width: 760px;  display:block; word-break: break-all; box-shadow: 0px 0 6px #ccc; background: #fff;  padding: 0px 15px; border-radius: 5px; font-size: 14px;" cellspacing="0" cellpadding="0" border="0" align="center  ">
                    <tbody>
                      <tr>
                          <td colspan="3" style="font-family:calibri,helvetica,arial,sans-serif; font-size: 18px;text-align: center;">
                        <span>POSTGRADUATE </span>
                           
                        </td>
                      </tr>
                      <tr style="display: grid; ">
                          <td colspan="3">
                            <table style="margin-bottom: 20px;  width: 730px; font-size: 14px; text-align: left; background: #ffffff; border: 1px solid #cac2be; clear: both;" cellspacing="0" cellpadding="5" border="0" align="left">
                                <thead>
                                  <tr style="background-color: #006cb5;; height: 20px; color: white;">
                                      <th style="font-family:calibri,helvetica,arial,sans-serif; text-align: left;" width="30%">Info</th>
                                      <th width="5%"><br></th>
                                      <th style="font-family:calibri,helvetica,arial,sans-serif; text-align: left;" width="65%">Details</th>
                                  </tr>
                                </thead>
                                <tbody className="tbody_formData_info">
                               
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Full Name:
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.fullName}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Father Name
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.father_Name}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Gender
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.gender}</td>
                                </tr>
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Email
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.email}</td>
                                </tr>
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Categorie
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.categorie}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Date of Birth
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.date_of_birth}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Home Town
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.home_city}</td>
                                </tr>
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Companies Name
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.companies_name}</td>
                                </tr>
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Companies Loacation
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.companies_city}</td>
                                </tr>
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Job Role
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.job_role}</td>
                                </tr>
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Package
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.package_lpa}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Selection
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.selectType}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Apply For Job
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.totalApplyCompanies}</td>
                                </tr>
  
                                <tr>
                                  <td
                                    width="100px"
                                    style={{
                                      fontFamily:
                                        "calibri, helvetica, arial, sans-serif",
                                    }}
                                  >
                                    Companies Type
                                  </td>
                                  <td width="40px" align="center">
                                    <b>:</b>
                                  </td>
                                  <td>${data.companiesType}</td>
                                </tr>
                              
                      </tbody>
                            </table>
                          </td>
                      </tr>
                    </tbody>
                </table>
              </td>
          </tr>
          <tbody style="text-align: center; align-items: center; ">
            <td style="border-top: 2px solid transparent;
            border-image: linear-gradient(0.25turn, red, green);
            border-image-slice: 1;
            width: 800px;" >
            <div style="width: 800px;text-align: center;font-size: 12px;
            border: 1px solid #eeeeee;padding-bottom: 7px; background: #fff;">
                <p style="font-size: 12px; color: #444444; text-align: center;">
                    Block C, Nadia, Kalyani, West Bengal 741245
                    <br>
                    UNIVERSITY OF KALYANI, E-mail: 
                </p>
            </div>
        </td>
                </tbody>
        </tbody>
      </table>
      <br>
  
  </body>
    `;
};

module.exports = { getJobTemplate };
