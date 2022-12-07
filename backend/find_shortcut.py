image_info = {"만해관" : {"img" : "/건물경로 이미지/만해관_문.jpg", "info" : "법학관에서 정각원 방향으로 가면 만해관 쪽문 있음"},
    "원흥관1" : {"img" : "/건물경로 이미지/원흥관_엘베_계단.jpg", "info" : "원흥관 내부에서 건물안으로 쭉 걸어오면 계단있음"},
    "원흥관2" : {"img" : "/건물경로 이미지/원흥관_엘베.jpg", "info" : "원흥관 엘레베이터는 2층부터 있음"},
    "원흥관3" : {"img" : "/건물경로 이미지/원흥관 _6층 _통로.jpg", "info" : "원흥관 6층에서 내려  좌회전 -> 직진하면 왼쪽방향에 쪽문 있음"},
    "원흥관4" : {"img" : "/건물경로 이미지/원흥관_연결통로.jpg", "info" : "중앙도서관 & 신공학관과 이어지는 외부통로 있음"},
    "중앙도서관" : {"img" : "/건물경로 이미지/중앙도서관_뒷문.jpg", "info" : "중앙도서관 정문 외에도 신공학관으로 가는길 사이에 쪽문 있음"},
    "경영관" : {"img" : "/건물경로 이미지/경영관_문화관.jpg", "info" : "경영관2층에서 문화관과 이어지는 통로 있음"},
    "과학관" : {"img" : "/건물경로 이미지/과학관_옆문.jpg", "info" : "상록원 입구에서 쭉 직진 후, 오른쪽 문"},
    "사회과학관" : {"img" : "/건물경로 이미지/사회과학관_엘베.jpg", "info" : "이해랑 예술 극장 오른쪽 길 쭉 직진하면 사과관으로 가는 엘베 있음"},
    "상록원" : {"img" : "/건물경로 이미지/상록원_대운동장.jpg", "info" : "상록원 올라가는 계단에서 왼쪽 방향으로 가면 대운동장과 이어지는 길 있음"},
    "학림관" : {"img" : "/건물경로 이미지/헐떡고개.jpg", "info" : "팔정도 <-> 학림관 및 체육관으로 가는 가장 빠른 길"},
    "혜화관" : {"img" : "/건물경로 이미지/혜화관_만해관.jpg", "info" : "혜화관 4층에 내려 매점 옆에 밖으로 나가는 길이 만해관과 이어짐"}}

# 만해관 <-> F
# 원흥관 <-> II
# 원흥관 <-> II
# 원흥관 <-> II
# 원흥관 <-> Q
# 중앙도서관 <-> Q
# 경영관 <-> 문화관
# 과학관 <-> B
# 사회과학관 엘베는 어디에서 어디...?
# 대운동장 <-> 상록원
# 체육관 <-> W
# 혜화관 <-> 만해관

import json

with open("./frontend/src/path1.json", "r", encoding='UTF8') as f:
    path_data = json.load(f)

dict_key = list(path_data.keys())
img_list = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"]
info_list = ["info1", "info2", "info3", "info4", "info5", "info6", "info7", "info8", "info9", "info10", "info11", "info12"]

shortcut_all = {}
for start in dict_key:
    shortcuts = {}
    for end in dict_key:
        shortcut = {}
        j = 0
        for i in range(2, len(path_data[start][end])):

            # 만해관 <-> F
            if (path_data[start][end][i-1]=="만해관" and path_data[start][end][i]=="F") or (path_data[start][end][i-1]=="F" and path_data[start][end][i]=="만해관"):
                shortcut[img_list[j]] = image_info["만해관"]["img"]
                shortcut[info_list[j]] = image_info["만해관"]["info"]
                j += 1

            # II -> 원흥관
            if path_data[start][end][i-1]=="II" and path_data[start][end][i]=="원흥관":
                shortcut[img_list[j]] = image_info["원흥관1"]["img"]
                shortcut[info_list[j]] = image_info["원흥관1"]["info"]
                j += 1
                shortcut[img_list[j]] = image_info["원흥관2"]["img"]
                shortcut[info_list[j]] = image_info["원흥관2"]["info"]
                j += 1
                shortcut[img_list[j]] = image_info["원흥관3"]["img"]
                shortcut[info_list[j]] = image_info["원흥관3"]["info"]
                j += 1
            
            # 원흥관 -> II
            if path_data[start][end][i-1]=="원흥관" and path_data[start][end][i]=="II":
                shortcut[img_list[j]] = image_info["원흥관3"]["img"]
                shortcut[info_list[j]] = image_info["원흥관3"]["info"]
                j += 1
                shortcut[img_list[j]] = image_info["원흥관2"]["img"]
                shortcut[info_list[j]] = image_info["원흥관2"]["info"]
                j += 1
                shortcut[img_list[j]] = image_info["원흥관1"]["img"]
                shortcut[info_list[j]] = image_info["원흥관1"]["info"]
                j += 1
            
            # 원흥관 <-> Q
            if (path_data[start][end][i-1]=="원흥관" and path_data[start][end][i]=="Q") or (path_data[start][end][i-1]=="Q" and path_data[start][end][i]=="원흥관"):
                shortcut[img_list[j]] = image_info["원흥관4"]["img"]
                shortcut[info_list[j]] = image_info["원흥관4"]["info"]
                j += 1
            
            # 중앙도서관 <-> Q
            if (path_data[start][end][i-1]=="중앙도서관" and path_data[start][end][i]=="Q") or (path_data[start][end][i-1]=="Q" and path_data[start][end][i]=="중앙도서관"):
                shortcut[img_list[j]] = image_info["중앙도서관"]["img"]
                shortcut[info_list[j]] = image_info["중앙도서관"]["info"]
                j += 1
            
            # 경영관 <-> 문화관
            if (path_data[start][end][i-1]=="경영관" and path_data[start][end][i]=="문화관") or (path_data[start][end][i-1]=="문화관" and path_data[start][end][i]=="경영관"):
                shortcut[img_list[j]] = image_info["경영관"]["img"]
                shortcut[info_list[j]] = image_info["경영관"]["info"]
                j += 1
            
            # 과학관 <-> B
            if (path_data[start][end][i-1]=="과학관" and path_data[start][end][i]=="B") or (path_data[start][end][i-1]=="B" and path_data[start][end][i]=="과학관"):
                shortcut[img_list[j]] = image_info["과학관"]["img"]
                shortcut[info_list[j]] = image_info["과학관"]["info"]
                j += 1

            # 사회과학관 엘베는 어디에서 어디...?

            # 대운동장 <-> 상록원
            if (path_data[start][end][i-1]=="대운동장" and path_data[start][end][i]=="상록원") or (path_data[start][end][i-1]=="상록원" and path_data[start][end][i]=="대운동장"):
                shortcut[img_list[j]] = image_info["상록원"]["img"]
                shortcut[info_list[j]] = image_info["상록원"]["info"]

            # 체육관 <-> W
            if (path_data[start][end][i-1]=="체육관" and path_data[start][end][i]=="W") or (path_data[start][end][i-1]=="W" and path_data[start][end][i]=="체육관"):
                shortcut[img_list[j]] = image_info["학림관"]["img"]
                shortcut[info_list[j]] = image_info["학림관"]["info"]

            # 혜화관 <-> 만해관
            if (path_data[start][end][i-1]=="혜화관" and path_data[start][end][i]=="만해관") or (path_data[start][end][i-1]=="만해관" and path_data[start][end][i]=="혜화관"):
                shortcut[img_list[j]] = image_info["혜화관"]["img"]
                shortcut[info_list[j]] = image_info["혜화관"]["info"]

        shortcuts[end] = shortcut
    shortcut_all[start] = shortcuts

file_path1 = "./frontend/src/shortcut1.json"
with open(file_path1, 'w', encoding='utf-8') as outfile:
    json.dump(shortcut_all, outfile, ensure_ascii=False, indent=4)


