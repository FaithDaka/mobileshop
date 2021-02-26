import React from 'react'

const Pagination = () => {
    return (
        <div class="aiz-pagination aiz-pagination-center mt-4">
            <nav>
                <ul class="pagination">
                    <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                        <span class="page-link" aria-hidden="true">‹</span>
                    </li>
                    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" rel="next" aria-label="Next »">›</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
