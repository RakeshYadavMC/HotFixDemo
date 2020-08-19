/**
    @company : Copyright © 2020, BeamSuntory
    All rights reserved.
    Redistribution and use in source form, with or without modification, are prohibited without the express written consent of BeamSuntory,Inc.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
    INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
    IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    @website : https://www.beamsuntory.com/
    @author BeamSuntory
    @version V_1.0
    @date 15/04/2020
    @description This trigger is created for state object.
*/
trigger TGR_SB2_State on State__c (before insert, before update) {
    if(Trigger.isBefore) {
        if(Trigger.isInsert) {
            TGRH_SB2_State.handleBeforeInsert(Trigger.New);
        }
        if(Trigger.isUpdate) {
            TGRH_SB2_State.handleBeforeUpdate(Trigger.New, Trigger.oldMap);
        }  
    }
}