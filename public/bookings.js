// Flatpickr stylesheet
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css";
document.head.appendChild(link);

// Flatpickr JavaScript file
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/flatpickr";
document.body.appendChild(script);

// reference element to append the HTML
const targetElement = document.getElementsByClassName("sf-booking-widget")[0];
targetElement.innerHTML += '<div class="sf-booking-form"></div>';

const bookingFormElement = document.querySelector(".sf-booking-form");

// Create the button
let button = document.createElement("button");
button.classList.add('btn', 'sf-modal-form');
button.textContent = "Book Now";

document.body.appendChild(button);

// Check if element has data attribute
if (targetElement && targetElement.hasAttribute("data-property-id")) {
    const propertyUrl = targetElement.getAttribute("data-property-id");
    // HTML code - check-in and check-out
    let htmlCode = `
            <div class="checkinout-group-container mb-3">
                <div class="checkinout-group" id="checkin">
                    <label for="checkin">Check-in:</label>
                    <input type="hidden" class="hidden-input" name="hidden-checkin">
                    <span>
                        <span class="day"></span>
                        <span class="rest-date"></span>
                    </span>
                </div>
                <div class="checkinout-group" id="checkout">
                    <label for="checkout">Check-out:</label>
                    <input type="hidden" class="hidden-input" name="hidden-checkout">
                    <span>
                        <span class="day"></span>
                        <span class="rest-date"></span>
                    </span>
                </div>
            </div>
    `;

    if (targetElement.hasAttribute('data-show-coupon') && targetElement.getAttribute('data-show-coupon') === 'true') {
        //if data-show-coupon is true
        htmlCode += `
            <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="Enter coupon" id="coupon" aria-label="Coupon" aria-describedby="basic-addon1">
            </div>
        `
    }

    htmlCode += `<button class="btn submit">Book Now</button>`;

    // Append HTML to target element
    bookingFormElement.innerHTML = htmlCode;
}
script.addEventListener("load", () => {
    function initializeFlatpickr(input, defaultDate, minDate, dateFormat, onChange) {
        flatpickr(input, {
            defaultDate,
            minDate,
            dateFormat,
            onChange,
            disableMobile: "true"
        });
    }

    function updateChildSpan(element, date) {
        const childSpan = element.querySelector("span");
        if (childSpan) {
            const daySpan = childSpan.querySelector(".day");
            if (daySpan) {
                daySpan.textContent = date.getDate();
            }
            const monthYearSpan = childSpan.querySelector(".rest-date");
            if (monthYearSpan) {
                monthYearSpan.textContent = date.toLocaleString('default', { month: 'long' }) + ' \'' + date.getFullYear().toString().substr(-2);
            }
        }
    }

    function updateHiddenInput(element, date) {
        const hiddenInput = element.querySelector('input.hidden-input');
        if (hiddenInput && hiddenInput.type === 'hidden') {
            hiddenInput.value = date.toISOString().slice(0, 10);
        }
    }

    const [checkinInput, checkoutInput] = document.querySelectorAll('#checkin, #checkout');
    const [dateToday, dateTomorrow] = [new Date(), new Date()];
    dateTomorrow.setDate(dateToday.getDate() + 1);

    initializeFlatpickr(checkinInput, dateToday, dateToday, "d-m-Y", selectedDates => {
        if (selectedDates?.[0]) {
            const checkinDate = selectedDates[0];
            const minDate = new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000);

            // Update checkout with checkin + 1 day
            const checkoutDate = new Date(minDate.getTime() + 24 * 60 * 60 * 1000);
            initializeFlatpickr(checkoutInput, checkoutDate, minDate, "d-m-Y", selectedDates => {
                if (selectedDates?.[0]) {
                    updateChildSpan(checkoutInput, selectedDates[0]);
                    updateHiddenInput(checkoutInput, selectedDates[0]);
                }
            });

            updateChildSpan(checkinInput, checkinDate);
            updateHiddenInput(checkinInput, checkinDate);
        }
    });

    initializeFlatpickr(checkoutInput, dateTomorrow, dateTomorrow, "d-m-Y", selectedDates => {
        if (selectedDates?.[0]) {
            updateChildSpan(checkoutInput, selectedDates[0]);
            updateHiddenInput(checkoutInput, selectedDates[0]);
        }
    });

    // Update span values for initial checkin and checkout
    updateChildSpan(checkinInput, dateToday);
    updateChildSpan(checkoutInput, dateTomorrow);
    updateHiddenInput(checkinInput, dateToday);
    updateHiddenInput(checkoutInput, dateTomorrow);

    // Update checkout span value when checkin changes
    checkinInput.addEventListener("change", event => {
        const selectedDate = event.target._flatpickr.selectedDates[0];

        // Calculate checkout (checkin + 1 day)
        const checkoutDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);

        // Update checkout using flatpickr instance
        checkoutInput._flatpickr.setDate(checkoutDate);

        // Update child span and hidden input for checkout date
        updateChildSpan(checkoutInput, checkoutDate);
        updateHiddenInput(checkoutInput, checkoutDate);
    });

    const submitButton = document.querySelector(".submit");

    submitButton.addEventListener("click", () => {
        const selectedProperty = document.getElementById('property').value;

        // Get the checkin and checkout values
        const checkinValue = checkinInput.value;
        let checkoutValue = checkoutInput.value;

        const couponElement = document.getElementById('coupon');
        const couponValue = couponElement ? couponElement.value : '';

        // If checkin or checkout is exit
        if (!checkinValue || !checkoutValue) {
            return;
        }

        // Update checkoutValue with actual selected checkout date
        const selectedCheckoutDate = checkoutInput._flatpickr.selectedDates[0];
        const checkoutFormat = checkoutInput._flatpickr.config.dateFormat;
        checkoutValue = flatpickr.formatDate(selectedCheckoutDate, checkoutFormat);

        // Construct URL with selected property, checkin/checkout
        const url =
            selectedProperty +
            "&checkin=" +
            checkinValue +
            "&checkout=" +
            checkoutValue +
            (couponValue ? "&promocode=" + couponValue : "");

        // window.location.href = 'https://bookingengine.stayflexi.com/?hotel_id=' + url;
        window.open(
            'https://bookingengine.stayflexi.com/?hotel_id=' + url,
            '_blank'
          )
    });
});

// Get config data from data attribute
const configData = JSON.parse(targetElement.dataset.propertyId);
if (configData && Array.isArray(configData) && configData.length > 0) {
    // Create select
    const propertyDropdown = document.createElement("select");
    propertyDropdown.id = "property";
    propertyDropdown.classList.add('form-select', 'py-2', 'border');
    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select property";
    propertyDropdown.appendChild(defaultOption);

    // Add options for each property in config data
    for (const property of configData) {
        const option = document.createElement("option");
        option.value = property.hotelId;
        option.textContent = property.hotelName;
        propertyDropdown.appendChild(option);
    }

    // Find parent container for insertion
    const container = document.querySelector('.sf-booking-form .checkinout-group-container');

    // Insert select element before container
    container.insertAdjacentElement('beforebegin', propertyDropdown);
} else {
    const propertyId = targetElement.dataset.propertyId;
    // Create hidden input element
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.id = "property";
    hiddenInput.value = propertyId;

    // Append hidden input element to targetElement
    targetElement.appendChild(hiddenInput);
}

/**
 * 
 * 
 * Animation of showing/hiding widget and button
 * 
*/

// Select target element
const trgtElement = document.getElementsByClassName("sf-booking-widget")[0];

// Creating observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // The element is visible
            console.log("Element is on the screen");
            hideButton();
        } else {
            // Do something when it goes out of the screen
            console.log("Element is out of the screen");
            showButton();
        }
    });
});

//Start observing
observer.observe(trgtElement);

function showButton() {
    // Reset translateY
    button.classList.add('btn-display');

    // onclick event to button
    button.onclick = function () {
        // Create modal
        let modal = createModal();

        // Append modal to document
        document.body.appendChild(modal);

        // Show modal
        showModal(modal);

        // Remove transition after showing modal
        button.style.transition = "";
    };
}
function hideButton() {
    let button = document.querySelector(".sf-modal-form");

    if (button) {
        // Apply transition
        button.classList.remove('btn-display');
    }
}



function createModal() {
    // Create modal element
    let modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = "myModal";
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "myModalLabel");
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body"></div>
        </div>
      </div>
    `;

    // Move .sf-booking-widget element to modal body
    let bookingWidget = document.querySelector(".sf-booking-widget");
    let modalBody = modal.querySelector(".modal-body");
    modalBody.appendChild(bookingWidget);

    return modal;
}

function showModal(modal) {
    // Show modal
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");

    // handle modal close
    let closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", function () {
        // Move .sf-booking-widget element back to original position
        let bookingWidget = modal.querySelector(".sf-booking-widget");
        document.body.appendChild(bookingWidget);

        // Remove modal and reset document body styles
        modal.parentNode.removeChild(modal);
        document.body.classList.remove("modal-open");
    });
}