import React from 'react'

const Specs = () => {
    return (
        <div className="bg-white mb-3 shadow-sm rounded">
            <div className="nav border-bottom aiz-nav-tabs">
              <a href="#tab_default_1" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset show active">Technical Specifications</a>
              {/* <a href="#tab_default_2" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset">Video</a>
              <a href="#tab_default_4" data-toggle="tab" className="p-3 fs-16 fw-600 text-reset">reviews</a> */}
            </div>

            <div className="tab-content pt-0">
              <div className="tab-pane fade active show" id="tab_default_1">
                <div className="p-4">
                  <div className="mw-100 overflow-hidden text-left">
                          <p><br /></p>
                          <table className="table table-bordered" style={{width: '100%'}}>
                              <tbody>
                                  <tr>
                                      <td>Performance</td>
                                      <td>
                                          <ul>
                                              <li>Hexa Core 2.65 GHz</li>
                                              <li>Dual Core + 1.8 GHz Quad core</li>
                                              <li>Apple A13 Bionic</li>
                                              <li>4 GB RAM</li>
                                          </ul>
                                      </td>
                                    </tr>
                                  <tr>
                                      <td>Display</td>
                                      <td>
                                      <ul>
                                              <li>Hexa Core 2.65 GHz</li>
                                              <li>Dual Core + 1.8 GHz Quad core</li>
                                              <li>Apple A13 Bionic</li>
                                              <li>4 GB RAM</li>
                                          </ul>
                                      </td>
                                    </tr>
                                  <tr>
                                      <td>Camera</td>
                                      <td>
                                      <ul>
                                              <li>Hexa Core 2.65 GHz</li>
                                              <li>Dual Core + 1.8 GHz Quad core</li>
                                              <li>Apple A13 Bionic</li>
                                              <li>4 GB RAM</li>
                                          </ul>
                                      </td>
                                    </tr>
                                  <tr>
                                      <td>Battery</td>
                                      <td>
                                      <ul>
                                              <li>Hexa Core 2.65 GHz</li>
                                              <li>Dual Core + 1.8 GHz Quad core</li>
                                              <li>Apple A13 Bionic</li>
                                              <li>4 GB RAM</li>
                                          </ul>
                                      </td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                </div>
              </div>

              {/* <div className="tab-pane fade" id="tab_default_2">
                <div className="p-4">
                  <div className="embed-responsive embed-responsive-16by9">
                          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/r_pfh-9HZ80" />
                        </div>
                </div>
              </div> */}
              {/* <div className="tab-pane fade" id="tab_default_3">
                <div className="p-4 text-center ">
                  <a href="" className="btn btn-primary">Download</a>
                </div>
              </div> */}
              {/* <div className="tab-pane fade" id="tab_default_4">
                <div className="p-4">
                  <ul className="list-group list-group-flush" />

                  <div className="text-center fs-18 opacity-70">
                          There have been no reviews for this product yet.
                                        </div>

                </div>
              </div> */}

            </div>
          </div>
    )
}

export default Specs
