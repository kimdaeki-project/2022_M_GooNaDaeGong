package com.gndg.home.member;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAO {
	
	@Autowired
	private SqlSession sqlSession;
	private final String NAMESPACE = "com.gndg.home.member.MemberDAO.";
	
	//아이디 중복검사
	public Long getDuplicationID(MemberDTO memberDTO)throws Exception{
		return sqlSession.selectOne(NAMESPACE+"getDuplicationID", memberDTO);
	}
	
	//이메일 중복검사
	public Long getDuplicationEmail(MemberDTO memberDTO)throws Exception{
		return sqlSession.selectOne(NAMESPACE+"getDuplicationEmail", memberDTO);
	}
	//회원가입
	public int setJoin(MemberDTO memberDTO)throws Exception{
		System.out.println("회원가입DAO");
		return sqlSession.insert(NAMESPACE+"setJoin", memberDTO);
	}
	//회원가입 프로필사진
	public int setAddMemberFile(MemberFileDTO memberFileDTO)throws Exception{
		return sqlSession.insert(NAMESPACE+"setAddMemberFile", memberFileDTO);
	}
	//로그인
	public MemberDTO getLogin(MemberDTO memberDTO)throws Exception{
		return sqlSession.selectOne(NAMESPACE+"getLogin", memberDTO);
	}
	//아이디 찾기
	public String getFindID(MemberDTO memberDTO)throws Exception{
		return sqlSession.selectOne(NAMESPACE+"getFindID", memberDTO);
	}
	//비밀번호 찾기
	public MemberDTO getFindPWCheck(MemberDTO memberDTO)throws Exception{
		System.out.println("비밀번호 찾기Check DAO");
		return sqlSession.selectOne(NAMESPACE+"getFindPWCheck", memberDTO);
	}
	//비밀번호 변경
	public int setUpdatePW(MemberDTO memberDTO)throws Exception{
		System.out.println("비밀번호 찾기 UPDATE DAO");
		return sqlSession.update(NAMESPACE+"setUpdatePW", memberDTO);
	}

}
