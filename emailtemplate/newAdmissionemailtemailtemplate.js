// // emailTemplate.js
const sendNewStudentEmailTemplate = (newAdmission) => {
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
                        <span>EXIT STUDENT </span>
                            <!-- <span>Dear Akram<br>Your inquiry has been received</span> -->
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
                            <td className="tbody_formData_info_name">
                              First Name:
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.firstName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Last Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.lastName}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Addhar Number
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.addhar_number}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">Email</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.email}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Date of Birth
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.date_of_birth}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Gender</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.gender}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Category
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.category}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.phone_no}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Domicile
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.domicile}</td>
                          </tr>

                          {/* Admission details */}

                          <tr>
                            <td className="tbody_formData_info_name">
                              Father Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.fatherName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Mother Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.motherName}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Parent Occoupation
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.parent_occupation}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Parent Incom
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.parent_income}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Parent Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.parent_phone_no}</td>
                          </tr>

                          {/*Admission details */}
                          <tr>Admission Details</tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Exame Type
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.examType}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Counselling
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.counselling}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Start Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.start_session}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              End Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.end_session}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Application No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.application_exam_no}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Rank</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.score_rank}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Cource</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.course_name}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Stream</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.stream}</td>
                          </tr>

                          {/* address details */}
                          <tr>Address Details</tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Village
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.village}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Police Station
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.police_station}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              district
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.district}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Pin Code
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.pin_code}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              State Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.state_name}</td>
                          </tr>

                          <tr>10th Info</tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              School Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.schoolName_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Roll No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.roll_No_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Regisration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.registration_no_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Board Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.board_Name_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Year of Passing
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.year_of_passing_10th}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Persentage
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.persentage_10th}</td>
                          </tr>

                          <tr>12th Info</tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              School Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.schoolName_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Roll No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.roll_No_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Regisration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.regisration_No_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Board Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.board_Name_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Year of Passing
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.year_of_passing_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Persentage
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>${newAdmission.persentage_12th}</td>
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

module.exports = { sendNewStudentEmailTemplate };
