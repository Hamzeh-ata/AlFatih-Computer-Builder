$(document).ready(function () {

    $("#componentCpu").on("click", function () {
        $(".dialog").css("opacity", "1");
        $(".dialog").css("visibility", "visible");
        $("body").css("overflow-y", "hidden");
        $(".dialogWrap").css("display", "flex");
        $(".dialog").css("display", "grid");
            $(".componentName h1").text("Central Processing Unit(CPU)");
            $(".componentImg img").attr("src", "imgs/cpu2.png");
            $(".componentDescription p").text("CPU, the central processing unit. Its job is to execute instructions for software running on your computer. The main brands for CPUs are Intel and AMD, and choosing one comes down to which one fits your needs and budget. Intel and AMD products aren't interchangeable, as they use different sockets to connect with the motherboard.Intel uses LGA, and the socket contains pins, making handling the CPU easier but needing care when fitting the CPU in the socket.AMD uses both PGA, with pins on the CPU, and LGA for their high end Threadripper CPUs.Entry - level CPUs have lower core count, with lower processing and multitasking capability.High - end processors like Intel's Cascade Lake or AMD's EPYC server CPUs come with high core counts, and features such as security, virtualization, or large amounts of memory cache. Importantly for consumers are core and thread count.All CPUs have cores, but recent CPUs split each core into two virtual cores called threads, adding up to 30 % extra performance.More cores makes more applications run smoothly on your system at the same time.So if you're streaming on Twitch using broadcasting software while playing a game, you'll need a CPU with more cores and threads.");
    });
    $("#componentMb").on("click", function () {
        $("body").css("overflow-y", "hidden");
        $(".dialogWrap").css("display", "flex");
        $(".dialog").css("display", "block");
        $(".componentName h1").text("Motherboard");
        $(".componentImg img").attr("src", "imgs/mbHome.jpg");
        $(".componentDescription p").text("A motherboard is the main printed circuit board (PCB) in a computer. The motherboard is a computer's central communications backbone connectivity point, through which all components and external peripherals connect.Motherboards can be found in virtually all computers, especially desktop and laptop PCs.The components that connect through them include chipsets, central processing units(CPU) and memory.The external peripherals include Wi - Fi, Ethernet and graphics cards with the graphics processing unit, or GPU.Motherboard manufacturers include Acer, ASRock, Asus, Gigabyte Technology, Intel and Micro - Star International.");
    });
    $("#componentGpu").on("click", function () {
        $("body").css("overflow-y", "hidden");
        $(".dialogWrap").css("display", "flex");
        $(".dialog").css("display", "block");
        $(".componentName h1").text("Integrated Graphics Processing Unit");
        $(".componentImg img").attr("src", "imgs/gpuHome.jpg");
        $(".componentDescription p").text("The graphics processing unit, or GPU, has become one of the most important types of computing technology, both for personal and business computing. Designed for parallel processing, the GPU is used in a wide range of applications, including graphics and video rendering. Although they’re best known for their capabilities in gaming, GPUs are becoming more popular for use in creative production and artificial intelligence (AI).GPUs were originally designed to accelerate the rendering of 3D graphics.Over time, they became more flexible and programmable, enhancing their capabilities.This allowed graphics programmers to create more interesting visual effects and realistic scenes with advanced lighting and shadowing techniques.Other developers also began to tap the power of GPUs to dramatically accelerate additional workloads in high performance computing(HPC), deep learning, and more.");
    });
    $("#componentRam").on("click", function () {
        $("body").css("overflow-y", "hidden");
        $(".dialogWrap").css("display", "flex");
        $(".dialog").css("display", "block");
        $(".componentName h1").text("Random Access Memory");
        $(".componentImg img").attr("src", "imgs/ramHome.jpg");
        $(".componentDescription p").text("Is a form of computer memory that can be read and changed in any order, typically used to store working data and machine code.A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory, in contrast with other direct-access data storage media (such as hard disks, CD-RWs, DVD-RWs and the older magnetic tapes and drum memory), where the time required to read and write data items varies significantly depending on their physical locations on the recording medium, due to mechanical limitations such as media rotation speeds and arm movement.");
    });
    $("#componentHdd").on("click", function () {
        $("body").css("overflow-y", "hidden");
        $(".dialogWrap").css("display", "flex");
        $(".dialog").css("display", "block");
        $(".componentName h1").text("Hard Disk Drive");
        $(".componentImg img").attr("src", "imgs/hddHome.png");
        $(".componentDescription p").text("A hard disk drive (HDD) is composed of a platter that contains compartments to hold data. This data is your operating system, applications, and any files you have created. There is also an accuator arm that moves across the platter to read or write the information requested. To make this process faster, the platter spins as the accuator arm moves across it.");
    });
    $("#componentPsu").on("click", function () {
        $("body").css("overflow-y", "hidden");
        $(".dialogWrap").css("display", "flex");
        $(".dialog").css("display", "block");
        $(".componentName h1").text("Power Supply Unit");
        $(".componentImg img").attr("src", "imgs/psuHome.jpg");
        $(".componentDescription p").text("A power supply unit (PSU) is a type of power converter that provides direct current (DC) voltage to internal computer components. Some of these units are designed specifically for use with 110 or 230 volts alternating current (AC), while others can be switched between the two or even accept any voltage within that range. The level of direct current voltage that they provide can also vary, typically between 3 and 12 volts DC. Desktop and laptop computers both use power supply units, though they are somewhat different in design. A desktop power supply unit usually has several bundles of wires designed to hook up directly to various internal components, while laptop 'power bricks' are external units that typically utilize coaxial power connectors.");
    });
    $(".dialogWrap").on("click", function () {
        $(".dialogWrap").hide();
        $("body").css("overflow-y", "scroll");

    });
});



