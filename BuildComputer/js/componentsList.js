localStorage.clear(); 
$(document).ready(function () {
    var compatibilityChx;
    var selectedButton, selectedComponentCpu, selectedComponentCooler, selectedComponentGpu, selectedComponentMB, selectedComponentRam, selectedComponentPSU, selectedComponentStorage, cpuSocket, coolerSocket, cpuHasCooler, cpuChipset, gpuInterface, MBRamProtocol, MBRamSpeed, MBRamSize, MBRamChannel, MbSata, ramQty, ramSize, count, totalWatts = 0, cpuWatts, gpuWatts, mbWatts, ramWatts, hddWatts,cpuPrice,gpuPrice,MBprice,ramPrice,hddPrice,psuPrice,coolerPrice,cpuImg,gpuImg,mbImg,hddImg,ramImg,psuImg,coolerImg,coolerSocket,mbSocket,mbChipset,mbInterFace,ramProtocol,ramSpeed,psuWattage;
    var nameArr = [];
    var componentRow=$("#componentsListRow");
    var componentCounter = 0;
    var componentTemplate = $("[component-template]");
    $('.compName').click(function(){
        $(".compName").removeClass('activeComponent').addClass('inactiveComponent');
        $(this).removeClass('inactiveComponent').addClass('activeComponent');
        $(this).css('pointer-events', 'all');  // enable buttons
        if (selectedButton == "ram" && $(".qtyOptions").length || $(".qty").length) {
            $(".qtyOptions").remove();
            $(".qty").remove();
        }
    });
    $("#mbButton").on("click", function () {
        $(".comp-col").remove();
         $(".selectedComponentImg").attr("src", null);
        selectedButton = "motherBoard";
        $(".componentName span").text(selectedButton);
        $("#nextButton").text("Next");
        if ($(".finshButton").length) {
            $("#nextButton").removeClass("finshButton");
        }
        $("#nextButton").css("pointer-events", "none");

       // nameArr = ["Name", "Socket", "FormFactor", "Chipset", "Ram capacity", "Release Year", "Slot Protcol", "Usb Slots", "Sli", "Bus", "Slot Type", "Max Speed", "Max capacity", "Max channel", "Watts", "Price"];
        getCall();
    });
    $("#gpuButton").on("click", function () {
        $(".comp-col").remove();
        $(".componentDeatilsList").remove();
        $(".selectedComponentImg").attr("src", null);
        selectedButton = "gpu";
        $(".componentName span").text(selectedButton);
        $("#nextButton").text("Next");
        if ($(".finshButton").length) {
            $("#nextButton").removeClass("finshButton");
        }
        $("#nextButton").css("pointer-events", "none");

     //   nameArr = ["Name", "Socket", "FormFactor", "Chipset", "Ram capacity", "Release Year", "Slot Protcol", "Usb Slots", "Sli", "Bus", "Slot Type", "Max Speed", "Max capacity", "Max channel", "Watts", "Price"];
        getCall();
    });
    $("#cpuButton").on("click", function () {
        $(".comp-col").remove();
        $(".componentDeatilsList").remove();
        $(".selectedComponentImg").attr("src", null);
        selectedButton = "cpu";
        $(".componentName span").text(selectedButton);
        $("#nextButton").text("Next");
        if ($(".finshButton").length) {
            $("#nextButton").removeClass("finshButton");
        }
         $("#nextButton").css("pointer-events", "none");
        
      
        getCall(); 
    });
    $("#coolerButton").on("click", function () {
        $(".comp-col").remove();
        $(".componentDeatilsList").remove();
        $(".selectedComponentImg").attr("src", null);
        selectedButton = "cpuCooler";
        $(".componentName span").text(selectedButton);
        $("#nextButton").text("Next");
        if ($(".finshButton").length) {
            $("#nextButton").removeClass("finshButton");
        }
        $("#nextButton").css("pointer-events", "none");

        getCall();
    });
    $("#memoryButton").on("click", function () {
        $(".comp-col").remove();
        $(".componentDeatilsList").remove();
        $(".selectedComponentImg").attr("src", null);
        selectedButton = "ram";
        $(".componentName span").text(selectedButton);
        $("#nextButton").text("Next");
        if (!$(".qtyOptions").length && !$(".qty").length){
            $(".addComponent").prepend("<select class='qtyOptions'><option>1</option> <option>2</option> <option>3</option> <option>4</option> </select>");
            $(".addComponent").prepend("<span class='qty' >QTY</span>");
        }
        if ($(".finshButton").length) {
            $("#nextButton").removeClass("finshButton");
        }
        $("#nextButton").css("pointer-events", "none");

        getCall();
    });
    $("#storageButton").on("click", function () {
        $(".comp-col").remove();
        $(".componentDeatilsList").remove();
        $(".selectedComponentImg").attr("src", null);
        selectedButton = "hardDisk";
        $(".componentName span").text(selectedButton);
        if ($(".qtyOptions").length || $(".qty").length) {
            $(".qtyOptions").remove();
            $(".qty").remove();
        }
        $("#nextButton").text("Next");
        if ($(".finshButton").length) {
            $("#nextButton").removeClass("finshButton");
        }
        $("#nextButton").css("pointer-events", "none");

        getCall();
    });
    $("#psuButton").on("click", function () {
        $(".comp-col").remove();
        $(".componentDeatilsList").remove();
        $(".selectedComponentImg").attr("src", null);
        selectedButton = "psu";
        $("#nextButton").text("Finsh");
        $(".componentName span").text(selectedButton);
        $("#nextButton").css("pointer-events", "none");

        getCall();
        totalWatts = cpuWatts + gpuWatts + mbWatts + ramWatts + hddWatts;
    });

    $("#searchByName").keyup(function () {
        var searchTxt = $("#searchByName").val();
        if ($("#compatibilityChx").is(":checked")) {
            $(".compatibleItem").each(function () {
                if (!Contains($(this).text().toLowerCase(), searchTxt.toLowerCase())) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
        }
        else {
            $(".comp-col").each(function () {
                if (!Contains($(this).text().toLowerCase(), searchTxt.toLowerCase())) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
        }
    });
    $(componentRow).on('click', '.component', function (e) {
        $("#nextButton").css("pointer-events", "all");
        $(".component").css("border","1px solid #9E9E9E");
        $(this).css("border", "3px solid #1F9C85");
        if (selectedButton != null) {
            $(".selectedcomponentWarning").remove();
            var dataId = $(e.currentTarget).attr('data-id');
            $.ajax({
                type: 'GET',
                url: 'https://localhost:7048/api/components/' + selectedButton +'/' + dataId + '/details',
                data: { "id": dataId },
                dataType: 'json',
                success: function (data) {
                    switch (selectedButton) {
                        case 'cpu':
                            selectedComponentCpu = data.name;
                            cpuHasCooler = data.includesCooler;
                            cpuSocket = data.socket;
                            cpuChipset = data.chipset;
                            cpuWatts = data.maxWatts;
                            cpuPrice = data.price;
                            cpuImg = data.img;
                              break;
                        case 'cpuCooler':
                            selectedComponentCooler = data.name;
                            coolerPrice = data.price;
                            coolerImg = data.img;
                            coolerSocket = data.cpuSocket;
                            break;
                        case 'gpu':
                            selectedComponentGpu = data.name;
                            gpuInterface = data.busInterface;
                            gpuWatts = data.watts; 
                            gpuPrice = data.price;
                            gpuImg = data.img;
                            break;
                        case 'motherBoard':
                            selectedComponentMB = data.name;
                            MBRamProtocol = data.memorySlotProtcol;
                            MBRamSpeed = data.memoryMaximumSpeed;
                            MBRamCap = data.memoryMaximumCapacity;
                            MBRamChannel = data.memoryMaximumChannels;
                            MbSata = data.sataSlots;
                            mbSocket = data.socket;
                            mbChipset = data.chipset;
                            mbInterFace = data.expansionSlots;
                            MBprice = data.price;
                            mbWatts = data.watts;
                            mbImg = data.motherBoardImg;
                            break;
                        case 'ram':
                            selectedComponentRam = data.name;
                            ramPrice = data.price;
                            var ramQTY = $('.qtyOptions').find(":selected").val();
                            $(".qtyOptions").change(function () {
                                ramQTY = $('.qtyOptions').find(":selected").val();
                                ramWatts = data.watts * ramQTY;
                                ramPrice = data.price * ramQTY;
                            });
                            ramWatts = data.watts * ramQTY;
                            $("#compatibilityChx").change(function () {
                                if (this.checked) {
                                    $(".qtyOptions  option").each(function (i) {
                                        var sd = data.size.replace(/[^0-9]/gi, '');
                                        var sd2 = MBRamCap.replace(/[^0-9]/gi, '');   // Replace everything that is not a number with nothing
                                        ramSize = parseInt(sd, 10);
                                        MBRamSize = parseInt(sd2, 10);;
                                        ramQty = ramSize * this.value;
                                        if (ramQty > MBRamSize || MBRamChannel<this.value) {
                                            $(this).hide();
                                        }
                                    })
                                }
                                else {
                                    $(".qtyOptions  option").each(function (i) {
                                        $(this).show();
                                    })
                                }
                            });
                            if ($("#compatibilityChx").is(":checked")) {
                                $(".qtyOptions  option").each(function (i) {
                                    var sd = data.size.replace(/[^0-9]/gi, '');
                                    var sd2 = MBRamCap.replace(/[^0-9]/gi, '');   // Replace everything that is not a number with nothing
                                    ramSize = parseInt(sd, 10);
                                    MBRamSize = parseInt(sd2, 10);;
                                    ramQty = ramSize * this.value;
                                    if (ramQty > MBRamSize || MBRamChannel < this.value) {
                                        $(this).hide();
                                    }
                                });
                            }
                            else {
                                $(".qtyOptions  option").each(function (i) {
                                    $(this).show();
                                })
                            }
                            ramImg = data.img;
                            ramProtocol = data.ddr;
                            ramSpeed = data.frequency;
                            break;
                        case 'hardDisk':
                            selectedComponentStorage = data.name;
                            hddWatts = data.watts;
                            hddPrice = data.price;
                            hddImg = data.img;
                            break;
                        case 'psu':
                            selectedComponentPSU = data.name;
                            psuPrice = data.price;
                            psuImg = data.img;
                            psuWattage = data.wattage;
                            break;
                    }
                    var dataArr = [];
                    var temp = 0;
                    var temp2 = 1;
                    $(".componentDeatilsList").remove();
                    $(".selectedComponentImg").attr("src", null);
                    $.each(data, function (index, val) {
                        dataArr[temp++] = val;
                        //    $("#selectedComponentBoxOne").text("General information")
                        if (selectedButton == "motherBoard") {
                            $(".selectedComponentImg").attr("src", data.motherBoardImg);
                        }
                         if (temp2 == 2) {
                            temp2 = 3;
                        }
                        if (index == "id" || index == "motherBoardImg" || index =="img") {
                            return;
                        }
                        $(".selectedComponentImg").attr("src", data.img);
                        $(".dataListCol").append('<div class ="componentDeatilsList"> <ul><li class="liData"><strong>' + index +"</strong>" +" : " + dataArr[temp2++] + '</li></ul></div>');
                        /*  $('#L1U1S').text("Name ");   
                          $("#L1U1").text(": " + data.name);
                          $('#L2U1S').text("Socket ");
                          $("#L2U1").text(": " + data.socket);
                          $('#L3U1S').text("formFactor ");
                          $("#L3U1").text(": " + data.formFactor);
                          $('#L1U2S').text("Chipset ");
                          $("#L1U2").text(": " + data.chipset);
                          $('#L2U2S').text("ramCapacity ");
                          $("#L2U2").text(": " + data.ramCapacity);
                          $('#L3U2S').text("releaseYear ");
                          $("#L3U2").text(": " + data.releaseYear);                              
                          $('#L1U3S').text("slotProtcol ");
                          $("#L1U3").text(": " + data.slotProtcol);
                          $('#L2U3S').text("usbSlots ");
                          $("#L2U3").text(": " + data.usbSlots);
                          $('#L3U3S').text("sli ");
                          $("#L3U3").text(": " + data.sli);        
                          $('#L2U4S').text("bus ");
                          $("#L2U4").text(": " + data.bus);
                          $('#L3U4S').text("watts ");
                          $("#L3U4").text(": " + data.watts);    
                          $('#L1U5S').text("Price ");
                          $("#L1U5").text(": " + data.price);    */
                    }
                    );
                }
            });
        }
    });
  /*  $("#motherBoardSearch").keyup(function () {
        var compnentCard = $("[component]");
        var dataId = $("#motherBoardSearch").val();
        var dataIdAttr = compnentCard.clone().attr("data-id");
        console.log(dataId);
        if ( dataId != "" ) {
            $.ajax({
                type: 'GET',
                data: { id: dataId },
                url: 'https://localhost:7048/api/components/motherBoard/search/' + dataId,
                dataType: 'json',
                success: function (data) {
                    $.each(data, function (index, val) {
                        if (dataIdAttr.includes(val.name)) {
                            $("[data-id='" + val.name + "']").css("display", "block");
                            console.log(dataIdAttr);
                        }
                        else {
                            compnentCard.css("display", "none");
                        }

                    })
                }
            });
        }
    });*/
    function getCall() {
        $.ajax({
            type: 'GET',
            url: 'https://localhost:7048/api/components/' + selectedButton,
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    var component = componentTemplate.clone().prop('content').children[0];
                    var compImg = $(component).find("[component-img]");
                    var compname = $(component).find("[component-name]");
                    var compnentCard = $(component).find("[component]");
                    compnentCard.attr("data-id", val.id);
                    compImg.attr("src", val.img);
                    $(compnentCard.attr("data-price", val.price));
                    compname.text(val.name);
                    componentRow.append(component);
                    switch (selectedButton) {
                        case "cpuCooler": {
                            $("#compatibilityChx").change(function () {
                                if (this.checked && selectedButton == "cpuCooler" && cpuSocket != null && !val.cpuSocket.toLowerCase().includes(cpuSocket.toLowerCase())) {
                                    $("[data-id=" + val.id + "]").parent().hide();
                                    $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");

                                }
                                else if (selectedButton == "cpuCooler" && !this.checked) {
                                    $("[data-id=" + val.id + "]").parent().show();
                                    $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");

                                }
                            });
                            if ($("#compatibilityChx").is(":checked") && selectedButton == "cpuCooler" && cpuSocket != null && !val.cpuSocket.toLowerCase().includes(cpuSocket.toLowerCase())) {
                                $("[data-id=" + val.id + "]").parent().hide();
                                $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                            }
                            else if (!$("#compatibilityChx").is(":checked") && selectedButton == "cpuCooler") {
                                $("[data-id=" + val.id + "]").parent().show();
                                $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");

                            }
                            break;
                        }
                        case "motherBoard": {
                            compImg.attr("src", val.motherBoardImg);
                            $("#compatibilityChx").change(function () {
                                if (this.checked && selectedButton == "motherBoard" && val.socket.toLowerCase() != cpuSocket.toLowerCase() && cpuSocket != null || this.checked && selectedButton == "motherBoard" && !cpuChipset.toLowerCase().includes(val.chipset.toLowerCase()) && cpuChipset != null || this.checked && selectedButton == "motherBoard" && !val.expansionSlots.toLowerCase().includes(gpuInterface.toLowerCase()) && gpuInterface != null) {
                                    $("[data-id=" + val.id + "]").parent().hide();
                                    $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                                    count = $(".component:visible").length;
                                    $("#availableItems").text(count + " Items available");
                                }







                                else if (selectedButton == "motherBoard" && !this.checked) {
                                    $("[data-id=" + val.id + "]").parent().show();
                                    $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");
                                    count = $(".component:visible").length;
                                    $("#availableItems").text(count + " Items available")

                                }
                            });
                            if ($("#compatibilityChx").is(":checked") && selectedButton == "motherBoard" && val.socket.toLowerCase() != cpuSocket.toLowerCase() && cpuSocket != null || $("#compatibilityChx").is(":checked") && selectedButton == "motherBoard" && !cpuChipset.toLowerCase().includes(val.chipset.toLowerCase()) && cpuChipset != null || $("#compatibilityChx").is(":checked") && selectedButton == "motherBoard" && !val.expansionSlots.toLowerCase().includes(gpuInterface.toLowerCase()) && gpuInterface != null) {
                                $("[data-id=" + val.id + "]").parent().hide();
                                $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                                count = $(".component:visible").length;
                                $("#availableItems").text(count + " Items available");
                            }
                            else if (selectedButton == "motherBoard" &&!$("#compatibilityChx").is(":checked") ) {
                                $("[data-id=" + val.id + "]").parent().show();
                                $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");
                                count = $(".component:visible").length;
                                $("#availableItems").text(count + " Items available");
                            }
                            break;
                        }
                        case "ram": {
                            $("#compatibilityChx").change(function () {
                                if (this.checked && selectedButton == "ram" && val.ddr.toLowerCase() != MBRamProtocol.toLowerCase() && MBRamProtocol != null || this.checked && selectedButton == "ram" && val.frequency > MBRamSpeed && MBRamSpeed != null) {
                                    $("[data-id=" + val.id + "]").parent().hide();
                                    $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                                }
                                else if (!this.checked && selectedButton == "ram") {
                                    $("[data-id=" + val.id + "]").parent().show();
                                    $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");


                                }
                            });

                            if ($("#compatibilityChx").is(":checked") && selectedButton == "ram" && val.ddr.toLowerCase() != MBRamProtocol.toLowerCase() && MBRamProtocol != null || $("#compatibilityChx").is(":checked") && selectedButton == "ram" && val.frequency > MBRamSpeed && MBRamSpeed != null) {
                                $("[data-id=" + val.id + "]").parent().hide();
                                $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");

                            }
                            else if (selectedButton == "ram" && !$("#compatibilityChx").is(":checked")) {
                                $("[data-id=" + val.id + "]").parent().show();
                                $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");
                            }
                            break;
                        }
                        case "hardDisk": {
                            $("#compatibilityChx").change(function () {
                                if (this.checked && selectedButton == "hardDisk" && MbSata != null && !val.interFace.toLowerCase().includes("sata")) {
                                    $("[data-id=" + val.id + "]").parent().hide();
                                    $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                                }
                                else if (selectedButton == "hardDisk" && !this.checked) {
                                    $("[data-id=" + val.id + "]").parent().show();
                                    $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");

                                }
                            });
                            if ($("#compatibilityChx").is(":checked") && selectedButton == "hardDisk" && MbSata != null && !val.interFace.toLowerCase().includes("sata")) {
                                $("[data-id=" + val.id + "]").parent().hide();
                                $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");

                            }
                            else if (!$("#compatibilityChx").is(":checked") && selectedButton == "hardDisk") {
                                $("[data-id=" + val.id + "]").parent().show();
                                $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");

                            }
                            break;
                        }
                        case "psu": {
                            $("#compatibilityChx").change(function () {
                                if (selectedButton == "psu" && this.checked&&val.wattage < totalWatts) {
                                    $("[data-id=" + val.id + "]").parent().hide();
                                    $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                                }
                                else if (selectedButton == "psu" && !this.checked) {
                                    $("[data-id=" + val.id + "]").parent().show();
                                    $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");
                                }
                                });
                            if ($("#compatibilityChx").is(":checked") && selectedButton == "psu" && val.wattage < totalWatts) {
                                $("[data-id=" + val.id + "]").parent().hide();
                                $("[data-id=" + val.id + "]").parent().removeClass("compatibleItem");
                                console.log("d");
                            }
                            else if (!$("#compatibilityChx").is(":checked") && selectedButton == "psu") {
                                $("[data-id=" + val.id + "]").parent().show();
                                $("[data-id=" + val.id + "]").parent().addClass("compatibleItem");

                            }
                            $("#nextButton").addClass("finshButton");

                            break;
                        }  
                    }
                }
                );
                var count = $(".component:visible").length;
                $("#compatibilityChx").change(function () {
                    if (this.checked) {
                        var count = $(".component:visible").length;
                        $("#availableItems").text(count + " Items available")

                    }
                    else {
                        var count = $(".component:visible").length;
                        $("#availableItems").text(count + " Items available")
                    }
                  
                });
                $("#availableItems").text(count + " Items available");
            }
        });
    }
    function Contains(text_one, text_two) {
        if (text_one.indexOf(text_two) != -1)
            return true;
    }
    $('#filterSelect').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        if (valueSelected == 1) {
            var gridComponents = $("[componentCol]");
            gridComponents.sort(function (a, b) {
                return $("[component]", a).attr("data-price") - $("[component]", b).attr("data-price");
            });
            jQuery("[componentsRow]").append(gridComponents);

           $("[componentsRow]").append($("[componentCol]"));
        }
        else if (valueSelected == 2) {
            var gridComponents = $("[componentCol]");
            gridComponents.sort(function (a, b) {
                return $("[component]", b).attr("data-price") - $("[component]", a).attr("data-price");
            });
            jQuery("[componentsRow]").append(gridComponents);
            $("[componentsRow]").append($("[componentCol]"));
        }
    });
    $("#nextButton").on("click", function () {
        if (selectedButton == "cpu" && selectedComponentCpu != null) {
            if (cpuHasCooler == "No") {
                $("#coolerButton").click();
            }
            else {
                $("#gpuButton").click();
            }
        }
        else if (selectedButton == "cpuCooler" && selectedComponentCooler != null) {
            $("#gpuButton").click();
        }
        else if (selectedButton == "gpu" && selectedComponentGpu != null) {

            $("#mbButton").click();
        }
        else if (selectedButton == "motherBoard" && selectedComponentMB != null) {

            $("#memoryButton").click();

        }
        else if (selectedButton == "ram" && selectedComponentRam != null) {
         
            $("#storageButton").click();
        }
        else if (selectedButton == "hardDisk" && selectedComponentStorage != null) {
            $("#psuButton").click();

        }
        
    });
    $("#startOver").on("click", function () {
        $("#cpuButton").click();
        $(".componentDeatilsList").remove();
        $("#nextButton").text("Next");
        $(".compName").css("pointer-events", "none");
        $(".selectedComponentImg").attr("src", null);
    });
    $(".addComponent").on('click', '.finshButton', function (e) {
        localStorage.setItem("selectedCpuName", selectedComponentCpu);
        localStorage.setItem("selectedCpuImg", cpuImg);
        localStorage.setItem("selectedCpuPrice", cpuPrice);
        localStorage.setItem("selectedCpuWatts", cpuWatts);
        //
        localStorage.setItem("selectedGpuName", selectedComponentGpu);
        localStorage.setItem("selectedGpuImg", gpuImg);
        localStorage.setItem("selectedGpuPrice", gpuPrice);
        localStorage.setItem("selectedGpuWatts", gpuWatts);
        //
        localStorage.setItem("selectedMBName", selectedComponentMB);
        localStorage.setItem("selectedMBImg", mbImg);
        localStorage.setItem("selectedMBPrice", MBprice);
        localStorage.setItem("selectedMBWatts", mbWatts);
        //
        localStorage.setItem("selectedRamName", selectedComponentRam);
        localStorage.setItem("selectedRamImg", ramImg);
        localStorage.setItem("selectedRamPrice", ramPrice); 
        localStorage.setItem("selectedRamWatts", ramWatts); 
        //
        localStorage.setItem("selectedHDDName", selectedComponentStorage);
        localStorage.setItem("selectedHDDImg", hddImg);
        localStorage.setItem("selectedHDDPrice", hddWatts);
        localStorage.setItem("selectedHDDWatts", hddPrice);
        //
        localStorage.setItem("selectedPSUName", selectedComponentPSU);
        localStorage.setItem("selectedpsuImg", psuImg);
        localStorage.setItem("selectedPSUPrice", psuPrice);
        if (selectedComponentCooler != null) {
            localStorage.setItem("selectedCoolerName", selectedComponentCooler);
            localStorage.setItem("selectedCoolerImg", coolerImg);
            localStorage.setItem("selectedCoolerPrice", coolerPrice);
            localStorage.setItem("selectedCoolerWatts", 10);
        }
        if (selectedComponentPSU != null && selectedButton == "psu" && $(".finshButton").length) {
            window.location.href = "https://localhost:7048/cart/";
        }
        else if (selectedComponentPSU == null && selectedButton == "psu" && $(".finshButton").length) {
            alert("Select an item");
        }

        compatibilityReview();
    });
    function compatibilityReview() {
        if (coolerSocket != null && !coolerSocket.toLowerCase().includes(cpuSocket.toLowerCase()) ) {
            localStorage.setItem("cpuAndCooler", "Cpu socket and cooler socket not compatible with each other");
        }
        else if (coolerSocket != null && coolerSocket.toLowerCase().includes(cpuSocket.toLowerCase()) ) {
            localStorage.setItem("cpuAndCooler", "Cpu socket and cooler socket compatible with each other");
        }
        if (mbSocket.toLowerCase() != cpuSocket.toLowerCase()) {
            localStorage.setItem("cpuAndMBSocket", "Cpu socket and Motherboard socket not compatible with each other");
        }
        else if (mbSocket.toLowerCase() == cpuSocket.toLowerCase()) {
            localStorage.setItem("cpuAndMBSocket", "Motherboard socket and cpu socket compatible with each other");
        }
        if (!cpuChipset.toLowerCase().includes(mbChipset.toLowerCase())){
            localStorage.setItem("cpuAndMBChipset", "Motherboard Chipset and cpu Chipset not compatible with each other");
        }
        else if (cpuChipset.toLowerCase().includes(mbChipset.toLowerCase())) {
            localStorage.setItem("cpuAndMBChipset", "Motherboard Chipset and cpu Chipset compatible with each other");
        }
        if (!mbInterFace.toLowerCase().includes(gpuInterface.toLowerCase())) {
            localStorage.setItem("gpuAndMB", "Gpu Interface and Motherboard not compatible with each other");
        }
        else if (mbInterFace.toLowerCase().includes(gpuInterface.toLowerCase())) {
            localStorage.setItem("gpuAndMB", "Gpu Interface and Motherboard compatible with each other");
            console.log(mbInterFace, gpuInterface);
        } 
        if (ramProtocol.toLowerCase() != MBRamProtocol.toLowerCase()) {
            localStorage.setItem("RamAndMB", "Ram DDR and Motherboard not compatible with each other");
        }
       else if (ramProtocol.toLowerCase() == MBRamProtocol.toLowerCase()) {
            localStorage.setItem("RamAndMB", "Ram DDR and Motherboard compatible with each other");
        }
        if (ramSpeed > MBRamSpeed) {
            localStorage.setItem("RamAndMBSpeed", "Ram frequency and Motherboard not compatible with each other");
        }
        else if (ramSpeed <= MBRamSpeed) {
            localStorage.setItem("RamAndMBSpeed", "Ram frequency and Motherboard compatible with each other");
        }
        if (psuWattage < totalWatts) {
            localStorage.setItem("psu", "Psu wattage not compatible with other parts");
        }
    }
});
