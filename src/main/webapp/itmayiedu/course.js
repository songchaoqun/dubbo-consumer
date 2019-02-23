/**
 * 不同条件查询课程 
 * @param type 1班类型（专业） 2讲师 3排序条件 4 按类型排序 5 按照类型是否免费排序
 * @param keyWord type==1(专业ID) type==2(老师ID) type=3(排序条件)
 */
function submitForm(type,keyWord){
	if(type==1){
		$("input[name='queryCourse.subjectId']").val(keyWord);

	}else if(type==2){
		$("input[name='queryCourse.teacherId']").val(keyWord);

	}else if(type==3){
		$("input[name='queryCourse.order']").val(keyWord);

	}else if(type==4){

        $("input[name='queryCourse.type']").val(keyWord);
        $("input[name='queryCourse.subType']").val("");
    }else if(type==5){

        $("input[name='queryCourse.subType']").val(keyWord);
	}
	$("input[name='queryCourse.courseName']").val('');
	$("#searchForm").submit();
}