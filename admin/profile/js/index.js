$(document).ready(function () {
    var editComponentsFlag = false;
    var deleteComponentsFlag = false;
    var newCompButton = false;
    var newCompRow = false;
    var rowId;
    var chkBoxChk;
    var selectedComponent = null;
    function mod() {
        if (Modernizr.mq('(max-width: 980px)') || Modernizr.mq('(min-device-width: 768px)') || Modernizr.mq('(max-device-width: 1024px)')) {
            if (selectedComponent == "motherBoard") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'MotherBoard image');
                $("td:nth-of-type(3)").attr('data-before', 'Socket');
                $("td:nth-of-type(4)").attr('data-before', 'Form Factor');
                $("td:nth-of-type(5)").attr('data-before', 'Chipset');
                $("td:nth-of-type(6)").attr('data-before', 'Ram capcity');
                $("td:nth-of-type(7)").attr('data-before', 'Release year');
                $("td:nth-of-type(8)").attr('data-before', 'Slot protcol');
                $("td:nth-of-type(9)").attr('data-before', 'Usb slots');
                $("td:nth-of-type(10)").attr('data-before', 'Sli');
                $("td:nth-of-type(11)").attr('data-before', 'Bus');
                $("td:nth-of-type(12)").attr('data-before', 'SlotType');
                $("td:nth-of-type(13)").attr('data-before', 'MaxSpeed');
                $("td:nth-of-type(14)").attr('data-before', 'Max capcity');
                $("td:nth-of-type(15)").attr('data-before', 'Max Channel');
                $("td:nth-of-type(16)").attr('data-before', 'Expansion Slots');
                $("td:nth-of-type(17)").attr('data-before', 'Price');
                $("td:nth-of-type(18)").attr('data-before', 'Watts');
            }
            else if (selectedComponent == "cpu") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'Cpu image');
                $("td:nth-of-type(3)").attr('data-before', 'Processor Number');
                $("td:nth-of-type(4)").attr('data-before', 'Cipset');
                $("td:nth-of-type(5)").attr('data-before', 'includesCooler');
                $("td:nth-of-type(6)").attr('data-before', 'Release year');
                $("td:nth-of-type(7)").attr('data-before', 'Total cores');
                $("td:nth-of-type(8)").attr('data-before', 'Max turbo');
                $("td:nth-of-type(9)").attr('data-before', 'Cashe');
                $("td:nth-of-type(10)").attr('data-before', 'Total l2 cashe');
                $("td:nth-of-type(11)").attr('data-before', 'Max memory size');
                $("td:nth-of-type(12)").attr('data-before', 'Memory types');
                $("td:nth-of-type(13)").attr('data-before', 'Max Memory Channels');
                $("td:nth-of-type(14)").attr('data-before', 'Processor Graphics');
                $("td:nth-of-type(15)").attr('data-before', 'Socket');
                $("td:nth-of-type(16)").attr('data-before', 'Clock');
                $("td:nth-of-type(17)").attr('data-before', 'Threds');
                $("td:nth-of-type(18)").attr('data-before', 'Base Watts');
                $("td:nth-of-type(19)").attr('data-before', 'Max Watts');
                $("td:nth-of-type(20)").attr('data-before', 'Price');
              
            }
            else if (selectedComponent == "cpuCooler") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'Cooler image');
                $("td:nth-of-type(3)").attr('data-before', 'Manufacturer');
                $("td:nth-of-type(4)").attr('data-before', 'Model');
                $("td:nth-of-type(5)").attr('data-before', 'fan RPM');
                $("td:nth-of-type(6)").attr('data-before', 'noise Level');
                $("td:nth-of-type(7)").attr('data-before', 'Color');
                $("td:nth-of-type(8)").attr('data-before', 'Height');
                $("td:nth-of-type(9)").attr('data-before', 'CPU Socket');
                $("td:nth-of-type(10)").attr('data-before', 'priceprice');

                // $("td:nth-of-type(9)").attr('data-before', 'Delete');
            }
            else if (selectedComponent == "gpu") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'Gpu image');
                $("td:nth-of-type(3)").attr('data-before', 'slotWidth');
                $("td:nth-of-type(4)").attr('data-before', 'DirectX');
                $("td:nth-of-type(5)").attr('data-before', 'busInterface');
                $("td:nth-of-type(6)").attr('data-before', 'memorySize');
                $("td:nth-of-type(7)").attr('data-before', 'baseClock');
                $("td:nth-of-type(8)").attr('data-before', 'boostClock');
                $("td:nth-of-type(9)").attr('data-before', 'outputs');
                $("td:nth-of-type(10)").attr('data-before', 'watts');
                $("td:nth-of-type(1)").attr('data-before', 'price');

               // $("td:nth-of-type(9)").attr('data-before', 'Delete');
            }
            else if (selectedComponent == "ram") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'Ram image');
                $("td:nth-of-type(3)").attr('data-before', 'Size');
                $("td:nth-of-type(4)").attr('data-before', 'Frequency');
                $("td:nth-of-type(5)").attr('data-before', 'Ddr');
                $("td:nth-of-type(6)").attr('data-before', 'Rgb');
                $("td:nth-of-type(7)").attr('data-before', 'Watts');
                $("td:nth-of-type(8)").attr('data-before', 'price');
            }
            else if (selectedComponent == "hardDisk") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'image');
                $("td:nth-of-type(3)").attr('data-before', 'Capacity');
                $("td:nth-of-type(4)").attr('data-before', 'Reading speed');
                $("td:nth-of-type(5)").attr('data-before', 'Writing speed');
                $("td:nth-of-type(6)").attr('data-before', 'Watts');
                $("td:nth-of-type(7)").attr('data-before', 'Price');
            }
            else if (selectedComponent == "psu") {
                $("td:nth-of-type(1)").attr('data-before', 'Name');
                $("td:nth-of-type(2)").attr('data-before', 'Image');
                $("td:nth-of-type(3)").attr('data-before', 'FormFactor');
                $("td:nth-of-type(4)").attr('data-before', 'PowerOutput');
                $("td:nth-of-type(5)").attr('data-before', 'EfficiencyRating');
                $("td:nth-of-type(6)").attr('data-before', 'Modularity');
                $("td:nth-of-type(7)").attr('data-before', 'Protection');
                $("td:nth-of-type(8)").attr('data-before', 'Price');
            }
        }
    }
    var JWT = localStorage.getItem('token');
    if (JWT == null) {
        window.location.href = "https://localhost:7048/login";
    }
    // Fetch the stored token from localStorage and set in the header
    $.ajax({
        type: 'GET',
        url: 'https://localhost:7048/api/UserProfile', headers:{'Authorization':'Bearer '+localStorage.getItem('token')},
        dataType: 'json',
        contentType: 'json',
        success: function (data) {
            $("#userName").text(data.userName);
            $("#userEmail").text(data.email);
                }
        , error: function (xhr, ErrorText, thrownError) {
            if ($("#userName").text().length == 0 && $("#userEmail").text().length == 0) {
                window.localStorage.removeItem("token");
                window.location.href = "https://localhost:7048/login";
            }
        }
    });
    $("#logOut").click(function () {
        window.localStorage.removeItem("token");
        window.location.href = "https://localhost:7048/login";
    });
    $('.compName').click(function () {
        $(".compName").removeClass('activeComponent').addClass('inactiveComponent');
        $(this).removeClass('inactiveComponent').addClass('activeComponent');
    });
    $("#mbButton").on("click", function () {
        deleteComponentsFlag = false;
        editComponentsFlag = false;
        checkAdminPanel();
        checkTableHeader();
        removeElements();
        newCompRow = false;
        $(".saveNewComp").remove();
        newCompButton = false;
        selectedComponent = "motherBoard";
        var hRow = '<tr class="tRow"><th>Name</th><th>Img</th><th>Socket</th><th>FormFactor</th><th>Chipset</th><th>ReleaseYear</th><th>UsbSlots</th><th>ramProtcol</th><th>RamSpeed</th><th>RamCap</th><th>MaxChannels</th><th>expansionSlots</th><th>M.2Slots</th><th>Sata</th><th>Watts</th><th>Price</th></tr>'
        $("#thead").append(hRow);
            // the call to checkMq here will execute every time the window is resized
            $(window).resize(mod);
               $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/motherBoard/admin',
            dataType: 'json',
                   success: function (data) {
                       $.each(data, function (index, val) {
                           $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled/></td><td id="imgTd"><input class="tdInput" value="' + val.motherBoardImg + '" readonly disabled /></td><td id="socketTd"><input class="tdInput" value="' + val.socket + '" readonly disabled /></td> <td id="formFactorTd"><input class="tdInput" value="' + val.formFactor + '" readonly disabled /></td> <td id="chipsetTd"><input class="tdInput" value="' + val.chipset + '" readonly disabled/></td><td id="ramCapTd"><input class="tdInput" value="' + val.releaseYear + '" readonly disabled/></td><td id="slotTd"><input class="tdInput" value="' + val.usbSlots + '" readonly disabled/></td><td id="sliTd"><input class="tdInput" value="' + val.memorySlotProtcol + '" readonly disabled/></td> <td id="slotTypeTd"><input class="tdInput" value="' + val.memoryMaximumSpeed + '" readonly disabled/></td><td id=""maxSpeedTd><input class="tdInput" value="' + val.memoryMaximumCapacity + '" readonly disabled/></td><td id="maxCapTd"><input class="tdInput" value="' + val.memoryMaximumChannels + '" readonly disabled/></td><td id="maxChannelsTd"><input class="tdInput" value="' + val.expansionSlots + '" readonly disabled/></td>   <td><input class="tdInput" value="' + val.m2Slots + '" readonly disabled/><td><input class="tdInput" value="' + val.sataSlots + '" readonly disabled/></td></td><td id="ramCapTd"><input class="tdInput" value="' + val.watts + '" readonly disabled/></td>  <td id="priceTd"><input class="tdInput" value="' + val.price + '" readonly disabled/></td></tr>');
                  // the call to checkMq here will execute after the document has loaded
                    mod();
                }
                )
             }
        });
    });
    $("#cpuButton").on("click", function () {
        deleteComponentsFlag = false;
        editComponentsFlag = false;
        checkAdminPanel();
        checkTableHeader();
        removeElements();
        newCompButton = false;
        newCompRow = false;
        $(".newComponentRow").remove();
        var hRow = '<tr class="tRow"> <th>Name</th> <th>img</th> <th>processorNumber</th><th>Chipset</th> <th>Cooler</th> <th>releaseYear</th> <th>totalCores</th> <th>maxTurbo</th> <th>Cashe</th> <th>totalL2Cache</th> <th>maxRamSize</th> <th>memoryTypes</th> <th>maxMemoryChn</th> <th>Graphics</th> <th>Socket</th> <th>Clock</th> <th>Threds</th> <th>baseWatts</th> <th>maxWatts</th> <th>Price</th></tr>';
        $("#thead").append(hRow);
        selectedComponent = "cpu";
        $(window).resize(mod);
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/cpu/admin/',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled/></td><td <td id="imgTd"><input class="tdInput" value="' + val.img + '" readonly disabled/></td>  <td><input class="tdInput" value="' + val.processorNumber + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.chipset + '" readonly disabled/></td> <td <td id="imgTd"><input class="tdInput" value="' + val.includesCooler + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.releaseYear + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.totalCores + '" readonly disabled/></td><td><input class="tdInput" value="' + val.maxTurbo + '" readonly disabled/></td><td><input class="tdInput" value="' + val.cashe + '" readonly disabled/></td><td><input class="tdInput" value="' + val.totalL2Cache + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.maxMemorySize + '" readonly disabled/></td><td><input class="tdInput" value="' + val.memoryTypes + '" readonly disabled/></td><td><input class="tdInput" value="' + val.maxMemoryChannels + '" readonly disabled/></td><td><input class="tdInput" value="' + val.processorGraphics + '" readonly disabled/></td><td> <input class="tdInput" value="' + val.socket + '" readonly disabled /></td > <td><input class="tdInput" value="' + val.clock + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.threds + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.baseWatts + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.maxWatts + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.price + '" readonly disabled/></td></tr >');

                    mod();
                }
                )
            }
        });
    });
    $("#coolerButton").on("click", function () {
        checkAdminPanel();
        editComponentsFlag = false;
        checkTableHeader();
        removeElements();
        newCompButton = false;
        newCompRow = false;
        deleteComponentsFlag = false;
        $(".newComponentRow").remove();
        var hRow = '<tr class="tRow"> <th>Name</th> <th>img</th> <th>Manufacturer</th><th>Model</th> <th>fanRPM</th> <th>noiseLevel</th> <th>Color</th> <th>Height</th> <th>CPUSocket</th> <th>price</th></tr>';
        $("#thead").append(hRow);
        selectedComponent = "cpuCooler";
        $(window).resize(mod);
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/cpuCooler/admin/',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    console.log(data);
                    $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled/></td><td <td id="imgTd"><input class="tdInput" value="' + val.img + '" readonly disabled/></td>  <td><input class="tdInput" value="' + val.manufacturer + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.model + '" readonly disabled/></td> <td <td id="imgTd"><input class="tdInput" value="' + val.fanRPM + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.noiseLevel + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.color + '" readonly disabled/></td><td><input class="tdInput" value="' + val.height + '" readonly disabled/></td><td><input class="tdInput" value="' + val.cpuSocket + '" readonly disabled/></td><td><input class="tdInput" value="' + val.price + '" readonly disabled/></td></tr >');
                    mod();
                }
                )
            }
        });
    });
    $("#gpuButton").on("click", function () {
        checkAdminPanel();
        editComponentsFlag = false;
        checkTableHeader();
        removeElements();
        newCompButton = false;
        newCompRow = false;
        deleteComponentsFlag = false;
         var hRow = '<tr class="tRow"> <th>Name</th> <th>Img</th> <th>SlotWidth</th> <th>DirectX</th> <th>BusInterface</th> <th>MemorySize</th> <th>BaseClock</th> <th>boostClock</th> <th>Outputs</th> <th>Watts</th> <th>price</th></tr>';
        $("#thead").append(hRow);
        selectedComponent = "gpu";
        $(window).resize(mod);
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/gpu/admin/',
            dataType: 'json',
            success: function (data) {
                    $.each(data, function (index, val) {
                    $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled /></td> <td id="imgTd"><input class="tdInput" value="' + val.img + '" readonly disabled /></td> <td><input class="tdInput" value="' + val.slotWidth + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.directX + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.busInterface + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.memorySize + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.baseClock + '" readonly disabled></td><td id="imgTd"><input class="tdInput" value="' + val.boostClock + '" readonly disabled /></td> <td id="imgTd"><input class="tdInput" value="' + val.outputs + '" readonly disabled /></td>  <td><input class="tdInput" value="' + val.watts + '" readonly disabled /></td><td><input class="tdInput" value="' + val.price + '" readonly disabled/></td>+</tr>');
                    mod();
                }
                )
            }
        });
    });
    $("#memButton").on("click", function () {
        checkAdminPanel();
        checkTableHeader();
        removeElements();
        newCompButton = false;
        newCompRow = false;
        deleteComponentsFlag = false;
        editComponentsFlag = false;
        var hRow = '<tr class="tRow"> <th class="thFiled" data-name="Name" >Name</th> <th class="thFiled"  >img</th> <th class="thFiled" data-name="Size">Size</th> <th class="thFiled" data-name="Size">formFactor</th> <th class="thFiled" data-name="Frequency">Frequency</th> <th class="thFiled" data-name="Ddr">Ddr</th> <th class="thFiled" data-name="Rgb">Color</th><th class="thFiled" data-name="Watts">Watts</th> <th class="thFiled" data-name="Price">price</th></tr>';
        $("#thead").append(hRow);
        selectedComponent = "ram";
        $(window).resize(mod);
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/ram/admin/',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled/></td><td id="imgTd"><input class="tdInput" value="' + val.img + '" readonly disabled/></td><td><input class="tdInput" value="' + val.size + '" readonly disabled/></td><td><input class="tdInput" value="' + val.formFactor + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.frequency + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.ddr + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.color + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.watts + '" readonly disabled/></td><td><input class="tdInput" value="' + val.price + '" readonly disabled/></td></tr>');
                    mod();
                }
                )
            }
        });
    });
    $("#storageButton").on("click", function () {
        checkAdminPanel();
        checkTableHeader();
        removeElements();
        newCompButton = false;
        deleteComponentsFlag = false;
        editComponentsFlag = false;
        newCompRow = false;
        var hRow = '<tr class="tRow"> <th>Name</th> <th>img</th> <th>interFace</th> <th>Capacity</th> <th>readSpead</th> <th>rotationRate</th><th>Watts</th> <th>price</th></tr>';
        $("#thead").append(hRow);
        selectedComponent = "hardDisk";
        $(window).resize(mod);
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/hardDisk/admin/',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled/></td><td <td id="imgTd"><input class="tdInput" value="' + val.img + '" readonly disabled/></td><td><input class="tdInput" value="' + val.interFace + '" readonly disabled/></td><td><input class="tdInput" value="' + val.capacity + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.readSpead + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.rotationRate + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.watts + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.price + '" readonly disabled/></td></tr>');
                    mod();
                }
                )
            }
        });
    });
    $("#psuButton").on("click", function () {
        checkAdminPanel();
        checkTableHeader();
        removeElements();
        newCompButton = false;
        deleteComponentsFlag = false;
        editComponentsFlag = false;
        newCompRow = false;
        var hRow = '<tr class="tRow"><th>Name</th><th>img</th><th>wattage</th> <th>powerOutput</th> <th>efficiencyRating</th> <th>Modularity</th> <th>type</th>  <th>price</th></tr>';
        $("#thead").append(hRow);
        selectedComponent = "psu";
        $(window).resize(mod);
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/psu/admin/',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    $("#tbody").append('<tr data-id="' + val.id + '" class="dataRow"><td><input class="tdInput" value="' + val.name + '" readonly disabled/></td><td <td id="imgTd"><input class="tdInput" value="' + val.img + '" readonly disabled/></td><td ><input class="tdInput" value="' + val.wattage + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.powerOutput + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.efficiencyRating + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.modularity + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.type + '" readonly disabled/></td> <td><input class="tdInput" value="' + val.price + '" readonly disabled/></td></tr>');
                    mod();
                }
                )
            }
        });
    });
    $(".mainWrap").on("click", "#addNewComp", function () {
        if (selectedComponent != null) {
            if (!newCompRow) {
                editComponentsFlag = false;
                deleteComponentsFlag = false;
                $(".editCheckBox").remove();
                $(".editTh").remove();
                $(".deleteCheckBox").remove();
                $(".deleteTh").remove();
                $(".tdInput").removeClass("activedTdInput");
                $(".saveNewComp").remove();
                $("#tbody").append('<tr class="newComponentRow"> </tr>');
                $('.tRow th').each(function () {
                    $(".newComponentRow").append("<td><input class='inputValue'/></td>");
                });
                mod();
                newCompRow = true;
            }
            if (!newCompButton) {
                $("#tableWrap").append('<div class="newComponentButton"></div>');
                $(".newComponentButton").append('<a class="saveNewComp" id="saveNewComp">Save new Component</a>');
                newCompButton = true;
                editComponentsFlag = false;

            }
        }
    });
    $(".mainWrap ").on("click", ".saveNewComp", function () {
        var inputArr = [];
        var inputTemp = 0;
        var myKeyVals = {};
        var emptyCheck = true;
        $(".inputValue").each(function () {
           // inputArr[inputTemp++] = thArr[thTemp2++] + ":" + $(this).val();
            inputArr[inputTemp++] = $(this).val();
            if ($(".inputValue").val().length == 0) {
                emptyCheck = true;
            }
            else if (!$(".inputValue").val().length == 0) {
                emptyCheck = false;
            }
        });
        if (selectedComponent == "ram") {
            myKeyVals = { "name": inputArr[0], "img": inputArr[1], "size": inputArr[2], "formFactor": inputArr[3], "frequency": inputArr[4], "ddr": inputArr[5], "color": inputArr[6], "watts": inputArr[7], "price": inputArr[8] }
            //  var myKeyVals = { inputArr } ;
        }
        if (selectedComponent == "cpuCooler") {
            myKeyVals = { "name": inputArr[0], "img": inputArr[1], "Manufacturer": inputArr[2], "Model": inputArr[3], "fanRPM": inputArr[4], "noiseLevel": inputArr[5], "Color": inputArr[6], "Height": inputArr[7], "CPUSocket": inputArr[8], "price": inputArr[9] }
            //  var myKeyVals = { inputArr } ;
        }
        else if (selectedComponent == "motherBoard") {
            myKeyVals = { "name": inputArr[0], "motherBoardImg": inputArr[1], "socket": inputArr[2], "formFactor": inputArr[3], "chipset": inputArr[4], "releaseYear": inputArr[5], "usbSlots": inputArr[6], "memorySlotProtcol": inputArr[7], "memoryMaximumSpeed": inputArr[8], "memoryMaximumCapacity": inputArr[9], "memoryMaximumChannels": inputArr[10], "expansionSlots": inputArr[11], "m2Slots": inputArr[12], "sataSlots": inputArr[13] ,"watts": inputArr[14], "price": inputArr[15] }
        }
        else if (selectedComponent == "cpu") {
            myKeyVals = { "name": inputArr[0], "img": inputArr[1], "processorNumber": inputArr[2], "chipset": inputArr[3], "includesCooler": inputArr[4], "releaseYear": inputArr[5], "totalCores": inputArr[6], "maxTurbo": inputArr[7], "cashe": inputArr[8], "totalL2Cache": inputArr[9], "maxMemorySize": inputArr[10], "memoryTypes": inputArr[11], "maxMemoryChannels": inputArr[12], "processorGraphics": inputArr[13], "socket": inputArr[14], "clock": inputArr[15], "threds": inputArr[16], "baseWatts": inputArr[17], "maxWatts": inputArr[18], "price": inputArr[19] }
        }
        else if (selectedComponent == "gpu") {
            myKeyVals = { "name": inputArr[0], "img": inputArr[1], "slotWidth": inputArr[2], "Directx": inputArr[3], "busInterface": inputArr[4], "memorySize": inputArr[5], "baseClock": inputArr[6], "boostClock": inputArr[7], "outputs": inputArr[8], "watts": inputArr[9], "price": inputArr[10] };

        }
        else if (selectedComponent == "hardDisk") {
            myKeyVals = { "name": inputArr[0], "img": inputArr[1], "interFace": inputArr[2], "capacity": inputArr[3], "readSpead": inputArr[4], "rotationRate": inputArr[5], "watts": inputArr[6], "price": inputArr[7] };
        }
        else if (selectedComponent == "psu") {
            myKeyVals = { "name": inputArr[0], "img": inputArr[1], "wattage": inputArr[2], "powerOutput": inputArr[3], "efficiencyRating": inputArr[4], "modularity": inputArr[5], "type": inputArr[6], "price": inputArr[7] };
        }
        if (!emptyCheck) {
            $(".errorText").remove();
            $.ajax({
                type: 'POST',
                url: 'https://localhost:7048/api/components/' + selectedComponent,
                dataType: 'json',
                contentType: "application/json charset=utf-8",
                data: JSON.stringify(myKeyVals),
                success: (function (data) {
                    window.location.reload();
                    $(".saveNewComp").remove();
                   $(".newComponentRow").remove();
                    newCompRow = false;
                    $(".alreadyExits").remove();
                    $(".successfullyAdded").remove();
                    $(".errorText2").remove();
                    $(".errorText").remove();
                    $(".newComponentButton").append("<h2 class='successfullyAdded'>Component successfully added</h2>");
                })
                , error: function (xhr, ErrorText, thrownError) {
                    if (xhr.status == 422) {
                        $(".alreadyExits").remove();
                        $(".errorText2").remove();
                        $(".newComponentButton").append("<h2 class='alreadyExits'>Compnent already exits </h2>");
                        $(".successfullyAdded").remove();
                    }
                    else if (xhr.status == 400) {
                        $(".errorText2").remove();
                        $(".alreadyExits").remove();
                        $(".newComponentButton").append("<h2 class='errorText2'>Somthing went wrong!</h2>");
                        $(".successfullyAdded").remove();
                    }
                }
            });
        }
        else if (emptyCheck) {
            $(".errorText").remove();
            $(".newComponentButton").append("<h2 class='errorText'>Please fill all fileds </h2>");
            $(".successfullyAdded").remove();
        }
    });
    $(document).on("change", "input[name='editBox']", function () {
        if ($('input[type="checkbox"]:checked').length > 1) {
            $(this).prop("checked", false);
            alert("Please choose one row");
        }
        else {
            rowId = $('input[type="checkbox"]:checked').closest('tr').attr('data-id');

            $('.dataRow').filter(':has(:checkbox)').find('td .tdInput').each(function () {
             
                    $(this).prop('disabled', true);
                    $(this).prop('readonly', true);
                    $(this).removeClass("activedTdInput");
                chkBoxChk = false;
            });
            $('.dataRow').filter(':has(:checkbox:checked)').find('td .tdInput').each(function () {
                $(this).prop('disabled', false);
                $(this).prop('readonly', false);
                $(this).addClass("activedTdInput");
                chkBoxChk = true;
            });
            if (chkBoxChk ) {
                $(".tableWrap").append('<div class="saveChanges justify-content-center mt-2" ><a class="saveNewComp" id="saveChanges">Save changes</a> </div>');
            }
            else if (!chkBoxChk  ) {
                $(".saveChanges").remove();
            }
        }
    });
    $(document).on("change", "input[name='deleteBox']", function () {
        if ($('input[type="checkbox"]:checked').length > 1) {
            $(this).prop("checked", false);
            alert("Please choose one row");
        }
        else {
            rowId = $('input[type="checkbox"]:checked').closest('tr').attr('data-id');
            chkBoxChk = true;
            if (chkBoxChk) {
                $(".saveChanges").remove();
                $(".tableWrap").append('<div class="saveChanges justify-content-center mt-2" ><a class="saveNewComp" id="deleteCompnent">Delete component</a> </div>');
            }
            else if (!chkBoxChk) {
                $(".saveChanges").remove();
            }

        }
    });
    $(".mainWrap").on("click", "#saveChanges", function () {
        var activeTdInput = [];
        var activeTdTemp = 0;
        var emptyTd;
        var myKeyVals;
        $(".activedTdInput").each(function () {
            // inputArr[inputTemp++] = thArr[thTemp2++] + ":" + $(this).val();
                activeTdInput[activeTdTemp++] = $(this).val();
            if (!$(".activedTdInput").val().length == 0) {
                 emptyTd = false;
            }
            else if ($(".activedTdInput").val().length == 0) {
                emptyTd = true;
            }
        });   
        if (selectedComponent == "cpu" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "img": activeTdInput[1], "processorNumber": activeTdInput[2], "chipset": activeTdInput[3], "includesCooler": activeTdInput[4], "releaseYear": activeTdInput[5], "totalCores": activeTdInput[6], "maxTurbo": activeTdInput[7], "cashe": activeTdInput[8], "totalL2Cache": activeTdInput[9], "maxMemorySize": activeTdInput[10], "memoryTypes": activeTdInput[11], "maxMemoryChannels": activeTdInput[12], "processorGraphics": activeTdInput[13], "socket": activeTdInput[14], "clock": activeTdInput[15], "threds": activeTdInput[16], "baseWatts": activeTdInput[17], "maxWatts": activeTdInput[18], "Price": activeTdInput[19] }

        }
        else if (selectedComponent == "cpuCooler" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "img": activeTdInput[1], "Manufacturer": activeTdInput[2], "Model": activeTdInput[3], "fanRPM": activeTdInput[4], "noiseLevel": activeTdInput[5], "Color": activeTdInput[6], "Height": activeTdInput[7], "CPUSocket": activeTdInput[8], "price": activeTdInput[9] }

        }
        else if (selectedComponent == "gpu" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "img": activeTdInput[1], "slotWidth": activeTdInput[2], "Directx": activeTdInput[3], "busInterface": activeTdInput[4], "memorySize": activeTdInput[5], "baseClock": activeTdInput[6], "boostClock": activeTdInput[7], "outputs": activeTdInput[8], "watts": activeTdInput[9], "price": activeTdInput[10] };
        }
        else if (selectedComponent == "motherBoard" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "motherBoardImg": activeTdInput[1], "socket": activeTdInput[2], "formFactor": activeTdInput[3], "chipset": activeTdInput[4], "releaseYear": activeTdInput[5], "usbSlots": activeTdInput[6], "memorySlotProtcol": activeTdInput[7], "memoryMaximumSpeed": activeTdInput[8], "memoryMaximumCapacity": activeTdInput[9], "memoryMaximumChannels": activeTdInput[10], "expansionSlots": activeTdInput[11], "m2Slots": activeTdInput[12], "sataSlots": activeTdInput[13], "watts": activeTdInput[14], "price": activeTdInput[15] }
        }
        else if (selectedComponent == "ram" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "img": activeTdInput[1], "size": activeTdInput[2], "formFactor": activeTdInput[3], "frequency": activeTdInput[4], "ddr": activeTdInput[5], "color": activeTdInput[6], "Watts": activeTdInput[7], "Price": activeTdInput[8] }
        }
        else if (selectedComponent == "hardDisk" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "img": activeTdInput[1], "interFace": activeTdInput[2], "capacity": activeTdInput[3], "readSpead": activeTdInput[4], "rotationRate": activeTdInput[5], "watts": activeTdInput[6], "price": activeTdInput[7] };
        }
        else if (selectedComponent == "psu" && !emptyTd) {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId, "name": activeTdInput[0], "img": activeTdInput[1], "wattage": activeTdInput[2], "powerOutput": activeTdInput[3], "efficiencyRating": activeTdInput[4], "modularity": activeTdInput[5], "type": activeTdInput[6], "price": activeTdInput[7] };
        }
        if (!emptyTd) {
            $(".errorText").remove();
            $.ajax({
                url: 'https://localhost:7048/api/components/' + selectedComponent + '/' + rowId,
                type: 'PUT',
                dataType: 'json',
                contentType: "application/json charset=utf-8",
                data: JSON.stringify(myKeyVals),
                success: function (data) {
                    window.location.reload();
                    $(".editCheckBox").remove();
                    $(".editTh").remove();
                    $('input[type="checkbox"]').prop("checked", false);
                    $(".tdInput").removeClass("activedTdInput");
                    $(".saveChanges").append("<h2 class='successfullyAdded'>Component successfully changed</h2>");
                    $("#saveChanges").remove();
                    $(".tdInput").prop('disabled', true);
                    $(".tdInput").prop('readonly', true);
                }, error: function (xhr, ErrorText, thrownError) {
                    if (xhr.status == 422) {
                        $(".alreadyExits").remove();
                        $(".errorText2").remove();
                        $(".saveChanges").append("<h2 class='alreadyExits'>Compnent already exits </h2>");
                        $(".successfullyAdded").remove();
                    }
                    else if (xhr.status == 400) {
                        $(".errorText2").remove();
                        $(".alreadyExits").remove();
                        $(".saveChanges").append("<h2 class='errorText2'>Somthing went wrong!</h2>");
                        $(".successfullyAdded").remove();
                    }
                }
            });
        }
        else if (emptyTd) {
            $(".errorText").remove();
            $(".saveChanges").append("<h2 class='errorText'>Please fill all fileds </h2>");
            $(".successfullyAdded").remove();
        }
    });
    $(".mainWrap").on("click", "#deleteCompnent", function () {
        var activeTdInput = [];
        var activeTdTemp = 0;
        var emptyTd;
        var myKeyVals;
        $(".activedTdInput").each(function () {
            // inputArr[inputTemp++] = thArr[thTemp2++] + ":" + $(this).val();
            activeTdInput[activeTdTemp++] = $(this).val();
            if (!$(".activedTdInput").val().length == 0) {
                emptyTd = false;
            }
            else if ($(".activedTdInput").val().length == 0) {
                emptyTd = true;
            }
        });
        if (selectedComponent == "cpu") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId}
        }
        else if (selectedComponent == "cooler") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId };
        }
        else if (selectedComponent == "gpu") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId};
        }
        else if (selectedComponent == "motherBoard") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId };        }
        else if (selectedComponent == "ram") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId };        }
        else if (selectedComponent == "hardDisk") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId };        }
        else if (selectedComponent == "psu") {
            $(".tdInput").removeClass("activedTdInput");
            $(".tdInput").prop('disabled', true);
            $(".tdInput").prop('readonly', true);
            myKeyVals = { "id": rowId };        }
        if (!emptyTd) {
            $(".errorText").remove();
            $.ajax({
                url: 'https://localhost:7048/api/components/' + selectedComponent + '/' + rowId,
                type: 'DELETE',
                dataType: 'json',
                contentType: "application/json charset=utf-8",
                data: JSON.stringify(myKeyVals),
                success: function (data) {
                    window.location.reload();
                    $(".deleteCheckBox").remove();
                    $(".deleteTh").remove();
                    $('input[type="checkbox"]').prop("checked", false);
                    $("#deleteCompnent").remove();
                    $(".tdInput").removeClass("activedTdInput");
                    $(".saveChanges").append("<h2 class='successfullyAdded'>Component successfully removed</h2>");
                    $(".deleteCompnent").remove();
                    $(".tdInput").prop('disabled', true);
                    $(".tdInput").prop('readonly', true);
                }, error: function (xhr, ErrorText, thrownError) {
                    if (xhr.status == 422) {
                        $(".alreadyExits").remove();
                        $(".errorText2").remove();
                        $(".saveChanges").append("<h2 class='alreadyExits'>Compnent already exits </h2>");
                        $(".successfullyAdded").remove();
                    }
                    else if (xhr.status == 400) {
                        $(".errorText2").remove();
                        $(".alreadyExits").remove();
                        $(".saveChanges").append("<h2 class='errorText2'>Somthing went wrong!</h2>");
                        $(".successfullyAdded").remove();
                    }
                }
            });
        }
        else if (emptyTd) {
            $(".errorText").remove();
            $(".saveChanges").append("<h2 class='errorText'>Please fill all fileds </h2>");
            $(".successfullyAdded").remove();
        }
    });
    $(".mainWrap").on("click", "#editComp", function () {
        if (editComponentsFlag == false) {
            $(".deleteCheckBox").remove();
            $(".deleteTh").remove();
            $(".saveChanges").remove();
            $(".tdInput").removeClass("activedTdInput");
            $(".tRow").append("<th class='editTh'>Edit</th>");
            $(".tRow").each(function () {
                $(".dataRow").append('<td class="editCheckBox" data-before="Edit"><input name="editBox" type="checkbox" class="editBox""></td>');
            });
            editComponentsFlag = true;
            newCompButton = false;
            newCompRow = false;
            deleteComponentsFlag = false;

      
        $(".newComponentRow").remove();
        $(".newComponentButton").remove();
        if (selectedComponent == "gpu") {

            $("td:nth-of-type(12)").attr('data-before', 'Edit');
        }
        else if (selectedComponent == "cpu") {
            $("td:nth-of-type(12)").attr('data-before', 'Edit');
        }
        else if (selectedComponent == "motherBoard") {
            $("td:nth-of-type(16)").attr('data-before', 'Edit');
        }
        else if (selectedComponent == "ram") {
            $("td:nth-of-type(9)").attr('data-before', 'Edit');
        }
        else if (selectedComponent == "hardDisk") {
            $("td:nth-of-type(8)").attr('data-before', 'Edit');
        }
        else if (selectedComponent == "psu") {
            $("td:nth-of-type(9)").attr('data-before', 'Edit');
        }
       
        } 
    });  
    $(".mainWrap").on("click", "#deleteComp", function () {
        if (deleteComponentsFlag == false) {
            $(".deleteCheckBox").remove();
            $(".deleteTh").remove();
            $(".tdInput").removeClass("activedTdInput");
            $(".tRow").append("<th class='deleteTh'>Delete</th>");
            $(".tRow").each(function () {
                $(".dataRow").append('<td class="deleteCheckBox" data-before="Delete"><input name="deleteBox" type="checkbox" class="deleteBox""></td>');
            });
            $(".saveChanges").remove();
            deleteComponentsFlag = true;
            newCompButton = false;
            newCompRow = false;
            editComponentsFlag = false;
            $(".editCheckBox").remove();
            $(".editTh").remove();
            $(".tdInput").removeClass("activedTdInput");
            $(".newComponentRow").remove();
            $(".newComponentButton").remove();
            if (selectedComponent == "gpu") {
                $("td:nth-of-type(16)").attr('data-before', 'Delete');
            }
            else if (selectedComponent == "cpu") {
                $("td:nth-of-type(21)").attr('data-before', 'Delete');

            }
            else if (selectedComponent == "cpuCooler") {
                $("td:nth-of-type(11)").attr('data-before', 'Delete');

            }
            else if (selectedComponent == "motherBoard") {
                $("td:nth-of-type(19)").attr('data-before', 'Delete');

            }
            else if (selectedComponent == "ram") {
                $("td:nth-of-type(9)").attr('data-before', 'Delete');
            }
            else if (selectedComponent == "hardDisk") {
                $("td:nth-of-type(8)").attr('data-before', 'Delete');
            }
            else if (selectedComponent == "psu") {
                $("td:nth-of-type(9)").attr('data-before', 'Delete');
            }

        }

    });
    function checkTableHeader() {
        if (!$('#tableRow').length && !$('.tableHeader').length) {
            $(".mainWrap").append("<div class='tableHeader'><div class='row tableHeaderRow'><div class='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center '><div class='headerText align-self-center'><h1>Manage Components</h1></div></div><div class='col-lg-6 col-md-12 col-sm-12 justify-content-lg-end d-flex justify-content-sm-center justify-content-md-center'><a class='addNewComponent' id='addNewComp'>Add New Component</a><a class='editComponent' id='editComp'>Edit component</a><a class='deleteComponent' id='deleteComp'>delete component</a></div></div></div>");
            $(".mainWrap").append("<div class='row' id='tableRow'> <div class='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center'><div class='tableWrap' id='tableWrap'><table><thead id='thead'></thead><tbody id='tbody'></tbody></table></div></div></div>");
        }
        else {
            
        }
    }
    function checkAdminPanel() {
        if ($('.adminPanel').length) {
            $(".adminPanel").remove();
        }
    }
    function removeElements() {
        $('.dataRow').remove();
        $(".saveChanges").remove();
        $('.tRow').remove();
        $(".alreadyExits").remove();
        $(".successfullyAdded").remove();
        $(".alreadyExits").remove();
        $(".errorText").remove();
        $(".errorText2").remove();
        $(".newComponentButton").remove();
        $(".newComponentRow").remove();
    }
});
