


var data = module.exports = {};


data.mac = `Processes: 329 total, 2 running, 327 sleeping, 1550 threads 
2017/04/14 09:59:33
Load Avg: 1.16, 1.35, 1.46 
CPU usage: 1.27% user, 1.50% sys, 97.21% idle 
SharedLibs: 204M resident, 49M data, 23M linkedit.
MemRegions: 50665 total, 3705M resident, 108M private, 1210M shared.
PhysMem: 14G used (1830M wired), 2188M unused.
VM: 889G vsize, 627M framework vsize, 2086455(0) swapins, 2105501(0) swapouts.
Networks: packets: 687227/438M in, 569619/161M out.
Disks: 667330/25G read, 145829/13G written.

PID    COMMAND          %CPU TIME     #TH   #WQ #PORTS MEM    PURG   CMPRS  PGRP  PPID  STATE    BOOSTS     %CPU_ME %CPU_OTHRS UID FAULTS   COW     MSGSENT   MSGRECV   SYSBSD    SYSMACH   CSW       PAGEINS IDLEW    POWER USER             #MREGS RPRVT VPRVT VSIZE KPRVT KSHRD
16098  top              0.0  00:00.19 1/1   0   20+    2992K+ 0B     0B     16098 14531 running  *0[1]      0.22598 0.00000    0   1724+    99+     139533+   69771+    3150+     75003+    110+      0       1+       7.1   root             N/A    N/A   N/A   N/A   N/A   N/A  
16085  mdworker         0.0  00:00.02 3     1   43     2780K  0B     0B     16085 1     sleeping *0[1]      0.00000 0.00000    89  1738     185     487       208       1559      505       92        0       0        0.0   _spotlight       N/A    N/A   N/A   N/A   N/A   N/A  
16033  quicklookd       0.0  00:00.09 4     1   88     4560K  32K    0B     16033 1     sleeping  0[0]      0.00000 0.00000    501 3285     247     350       88        2592      728       269       0       4        0.0   jeremychone      N/A    N/A   N/A   N/A   N/A   N/A  

Processes: 329 total, 2 running, 327 sleeping, 1550 threads 
2017/04/14 09:59:33
Load Avg: 1.16, 1.35, 1.46 
CPU usage: 1.27% user, 1.50% sys, 97.21% idle 
SharedLibs: 204M resident, 49M data, 23M linkedit.
MemRegions: 50665 total, 3705M resident, 108M private, 1210M shared.
PhysMem: 14G used (1830M wired), 2188M unused.
VM: 889G vsize, 627M framework vsize, 2086455(0) swapins, 2105501(0) swapouts.
Networks: packets: 687227/438M in, 569619/161M out.
Disks: 667330/25G read, 145829/13G written.

PID    COMMAND          %CPU TIME     #TH   #WQ #PORTS MEM    PURG   CMPRS  PGRP  PPID  STATE    BOOSTS     %CPU_ME %CPU_OTHRS UID FAULTS   COW     MSGSENT   MSGRECV   SYSBSD    SYSMACH   CSW       PAGEINS IDLEW    POWER USER             #MREGS RPRVT VPRVT VSIZE KPRVT KSHRD
16098  top              7.1  00:00.19 1/1   0   20+    2992K+ 0B     0B     16098 14531 running  *0[1]      0.22598 0.00000    0   1724+    99+     139533+   69771+    3150+     75003+    110+      0       1+       7.1   root             N/A    N/A   N/A   N/A   N/A   N/A  
16085  mdworker         0.0  00:00.02 3     1   43     2780K  0B     0B     16085 1     sleeping *0[1]      0.00000 0.00000    89  1738     185     487       208       1559      505       92        0       0        0.0   _spotlight       N/A    N/A   N/A   N/A   N/A   N/A  
16033  quicklookd       0.0  00:00.09 4     1   88     4560K  32K    0B     16033 1     sleeping  0[0]      0.00000 0.00000    501 3285     247     350       88        2592      728       269       0       4        0.0   jeremychone      N/A    N/A   N/A   N/A   N/A   N/A  `;



data.lnx = `top - 23:41:05 up 413 days, 21:49,  2 users,  load average: 0.00, 0.01, 0.05
Tasks:  88 total,   1 running,  87 sleeping,   0 stopped,   0 zombie
Cpu(s):  1.1%us,  0.3%sy,  0.0%ni, 98.5%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   1019444k total,   507108k used,   512336k free,    84072k buffers
Swap:        0k total,        0k used,        0k free,   160568k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                    
  334 ec2-user  20   0 1255m 123m  17m S  2.0 12.4  64:38.11 gulp                                                       
    1 root      20   0 19636 1808 1484 S  0.0  0.2   0:19.69 init                                                       
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd                                                   
    3 root      20   0     0    0    0 S  0.0  0.0   1:17.94 ksoftirqd/0                                                
    5 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 kworker/0:0H                                               
    7 root      20   0     0    0    0 S  0.0  0.0   5:30.26 rcu_sched                                                  
    8 root      20   0     0    0    0 S  0.0  0.0   0:00.00 rcu_bh                                                     
    9 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 migration/0                                                
   10 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 khelper                                                    
   11 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kdevtmpfs                                                  
   12 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 netns                                                      
   13 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 perf                                                       
   16 root      20   0     0    0    0 S  0.0  0.0   0:00.01 xenwatch                                                   
   21 root      20   0     0    0    0 S  0.0  0.0   0:00.00 xenbus                                                     
   22 root      20   0     0    0    0 S  0.0  0.0  15:26.70 kworker/0:1                                                
  124 root      20   0     0    0    0 S  0.0  0.0   0:07.43 khungtaskd                                                 
  125 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 writeback                                                  
  127 root      25   5     0    0    0 S  0.0  0.0   0:00.00 ksmd                                                       
  128 root      39  19     0    0    0 S  0.0  0.0   0:00.00 khugepaged                                                 
  129 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 crypto                                                     
  130 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 kintegrityd                                                
  131 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 bioset                                                     
  133 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 kblockd                                                    
  315 ec2-user  20   0  122m 2140 1640 S  0.0  0.2   0:00.02 screen                                                     
  316 ec2-user  20   0  112m 3024 2536 S  0.0  0.3   0:00.00 bash                                                       
  485 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 md                                                         
  612 root      20   0     0    0    0 S  0.0  0.0   0:11.26 kswapd0                                                    
  684 root      20   0     0    0    0 S  0.0  0.0   0:00.00 fsnotify_mark                                              
  699 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 kthrotld                                                   
  745 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 deferwq                                                    
 1374 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 ata_sff                                                    
 1389 root      20   0     0    0    0 S  0.0  0.0   0:00.00 scsi_eh_0                                                  
 1390 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 scsi_tmf_0                                                 
 1405 root      20   0     0    0    0 S  0.0  0.0   0:00.00 scsi_eh_1                                                  
 1406 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 scsi_tmf_1                                                 
 1472 root      20   0     0    0    0 S  0.0  0.0   1:11.30 jbd2/xvda1-8                                               
 1473 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 ext4-rsv-conver                                            
 1516 root      20   0 11464  940    0 S  0.0  0.1   0:00.03 udevd                                                      
 1673 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 kpsmoused                                                  
 1674 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kworker/0:2                                                
 1798 root      20   0     0    0    0 S  0.0  0.0   1:52.77 jbd2/xvdb-8                                                
 1799 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 ext4-rsv-conver                                            
 1832 root      20   0     0    0    0 S  0.0  0.0   0:19.72 kauditd                                                    
 1875 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 ipv6_addrconf                                              
 2010 root      20   0  9360 1972 1484 S  0.0  0.2   0:09.28 dhclient                                                   
 2051 root      16  -4  109m  964  512 S  0.0  0.1   2:12.50 auditd                                                     
 2069 root      20   0  242m 4724    0 S  0.0  0.5   0:53.85 rsyslogd                                                   
 2116 rpcuser   20   0 39860  796    4 S  0.0  0.1   0:00.00 rpc.statd                                                  
 2260 root       0 -20     0    0    0 S  0.0  0.0   0:00.02 kworker/0:1H                                               
 2327 postgres  20   0  326m  12m  11m S  0.0  1.3   6:54.61 postmaster                                                 
 2329 postgres  20   0  184m 1388  376 S  0.0  0.1   0:00.17 postmaster                                                 
 2331 postgres  20   0  326m  46m  44m S  0.0  4.6   0:35.33 postmaster                                                 
 2332 postgres  20   0  326m 1760  680 S  0.0  0.2   3:41.53 postmaster                                                 
 2333 postgres  20   0  326m 4404 3324 S  0.0  0.4   3:47.90 postmaster                                                 
 2334 postgres  20   0  326m 4712 3368 S  0.0  0.5   4:54.11 postmaster                                                 
 2335 postgres  20   0  185m 3012 1860 S  0.0  0.3  26:03.79 postmaster                                                 
 2399 root      20   0  6460  116    0 S  0.0  0.0   0:00.01 agetty                                                     
 2402 root      20   0  4312   92    4 S  0.0  0.0   0:00.01 mingetty                                                   
 2405 root      20   0  4312   92    4 S  0.0  0.0   0:00.00 mingetty                                                   
 2408 root      20   0  4312   96    4 S  0.0  0.0   0:00.00 mingetty                                                   
 2410 root      20   0  4312   96    4 S  0.0  0.0   0:00.00 mingetty                                                   
 2412 root      20   0  4312   92    4 S  0.0  0.0   0:00.00 mingetty                                                   
 2414 root      20   0  4312   96    4 S  0.0  0.0   0:00.00 mingetty                                                   
 6540 ec2-user  20   0  916m  46m  17m S  0.0  4.7   0:19.59 node                                                       
12309 ec2-user  20   0  122m  700  208 S  0.0  0.1   0:00.00 screen                                                     
12310 ec2-user  20   0  112m  384    0 S  0.0  0.0   0:00.00 bash                                                       
13318 root      20   0 77844 2196 1380 S  0.0  0.2   1:15.39 sshd                                                       
13346 root      20   0  116m 1732 1156 S  0.0  0.2   0:28.58 crond                                                      
13383 ntp       20   0 29288 2332 1768 S  0.0  0.2   0:18.33 ntpd                                                       
13428 dbus      20   0 21792  228    0 S  0.0  0.0   0:00.00 dbus-daemon                                                
13462 rpc       20   0 35292  360    0 S  0.0  0.0   0:17.65 rpcbind                                                    
13546 root      20   0  4380  208   60 S  0.0  0.0   6:33.96 rngd                                                       
13605 root      20   0 17068  152    0 S  0.0  0.0   0:00.13 atd                                                        
18272 ec2-user  20   0  122m  492    0 S  0.0  0.0   0:00.05 screen                                                     
18273 ec2-user  20   0  112m  496    4 S  0.0  0.0   0:00.00 bash                                                       
18291 ec2-user  20   0  916m  33m 4880 S  0.0  3.4   0:10.28 node                                                       
18707 root      20   0  115m 6632 5556 S  0.0  0.7   0:00.00 sshd                                                       
18709 ec2-user  20   0  115m 3828 2752 S  0.0  0.4   0:00.00 sshd                                                       
18710 ec2-user  20   0  112m 3444 2976 S  0.0  0.3   0:00.00 bash                                                       
18835 root      20   0  115m 6608 5532 S  0.0  0.6   0:00.01 sshd                                                       
18837 ec2-user  20   0  115m 3956 2880 S  0.0  0.4   0:00.00 sshd                                                       
18838 ec2-user  20   0  112m 3444 2976 S  0.0  0.3   0:00.00 bash                                                       
18863 ec2-user  20   0 15332 2124 1852 R  0.0  0.2   0:00.00 top                                                        
21262 root      20   0     0    0    0 S  0.0  0.0   0:31.52 kworker/u30:2                                              
22842 root      20   0 11460  948    4 S  0.0  0.1   0:00.00 udevd                                                      
22843 root      20   0 11460  948    4 S  0.0  0.1   0:00.00 udevd                                                      
24541 ec2-user  20   0 52788  560    0 S  0.0  0.1   0:00.00 ssh-agent                                                  
30752 root      20   0     0    0    0 S  0.0  0.0   0:02.41 kworker/u30:0                                              
`;

